import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_VARY_HEADER = 'Authorization';

const decodeBase64 = (value: string): string => {
  if (typeof atob === 'function') {
    return atob(value);
  }

  const maybeBuffer = (globalThis as { Buffer?: { from: (input: string, encoding: string) => { toString: (encoding: string) => string } } }).Buffer;
  if (maybeBuffer) {
    return maybeBuffer.from(value, 'base64').toString('utf-8');
  }

  throw new Error('No base64 decoder available');
};

const constantTimeEqual = (a: string, b: string): boolean => {
  const encoder = new TextEncoder();
  const aBytes = encoder.encode(a);
  const bBytes = encoder.encode(b);
  const maxLength = Math.max(aBytes.length, bBytes.length);
  let diff = aBytes.length ^ bBytes.length;

  for (let i = 0; i < maxLength; i += 1) {
    diff |= (aBytes[i] ?? 0) ^ (bBytes[i] ?? 0);
  }

  return diff === 0;
};

const appendVaryHeader = (response: NextResponse, value: string) => {
  const current = response.headers.get('Vary');
  if (!current) {
    response.headers.set('Vary', value);
    return;
  }

  const values = current
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (!values.some((entry) => entry.toLowerCase() === value.toLowerCase())) {
    response.headers.set('Vary', [...values, value].join(', '));
  }
};

const applySecurityHeaders = (
  response: NextResponse,
  request: NextRequest,
  options?: { authSensitive?: boolean },
): NextResponse => {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  const forwardedProto = request.headers.get('x-forwarded-proto');
  const protocol = (forwardedProto ?? request.nextUrl.protocol).replace(/:$/, '').toLowerCase();
  if (protocol === 'https') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000');
  }

  if (options?.authSensitive) {
    response.headers.set('Cache-Control', 'no-store');
    appendVaryHeader(response, AUTH_VARY_HEADER);
  }

  return response;
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  const isJapanesePath =
    pathname.startsWith('/jp') ||
    pathname.startsWith('/about-me_jp') ||
    pathname.startsWith('/guardians_jp') ||
    pathname.startsWith('/clientworks_jp');
  requestHeaders.set('x-doc-lang', isJapanesePath ? 'ja' : 'en');
  const isProtectedRoute =
    pathname.startsWith('/clientworks') || pathname.startsWith('/clientworks_jp');
  const nextWithHeaders = () =>
    applySecurityHeaders(
      NextResponse.next({ request: { headers: requestHeaders } }),
      request,
      { authSensitive: isProtectedRoute },
    );

  if (!isProtectedRoute) return nextWithHeaders();

  const validUser = process.env.BASIC_AUTH_USER?.trim();
  const validPassword = process.env.BASIC_AUTH_PASSWORD?.trim();
  if (!validUser || !validPassword) {
    if (process.env.NODE_ENV === 'production') {
      return applySecurityHeaders(
        new NextResponse('Authentication is not configured', {
          status: 503,
          headers: {
            'Cache-Control': 'no-store',
          },
        }),
        request,
        { authSensitive: true },
      );
    }
    return nextWithHeaders();
  }

  const basicAuth = request.headers.get('authorization');
  const basicAuthMatch = basicAuth?.match(/^Basic\s+(.+)$/i);
  if (basicAuthMatch) {
    try {
      const authValue = basicAuthMatch[1];
      const decoded = decodeBase64(authValue);
      const separatorIndex = decoded.indexOf(':');
      const user = separatorIndex >= 0 ? decoded.slice(0, separatorIndex) : '';
      const pwd = separatorIndex >= 0 ? decoded.slice(separatorIndex + 1) : '';

      if (constantTimeEqual(user, validUser) && constantTimeEqual(pwd, validPassword)) {
        return nextWithHeaders();
      }
    } catch {
      // fall through to 401
    }
  }

  return applySecurityHeaders(
    new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
        'Cache-Control': 'no-store',
      },
    }),
    request,
    { authSensitive: true },
  );
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
