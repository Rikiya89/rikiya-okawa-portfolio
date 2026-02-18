import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  const isJapanesePath =
    pathname.startsWith('/jp') ||
    pathname.startsWith('/about-me_jp') ||
    pathname.startsWith('/guardians_jp') ||
    pathname.startsWith('/clientworks_jp');
  requestHeaders.set('x-doc-lang', isJapanesePath ? 'ja' : 'en');
  const nextWithHeaders = () => NextResponse.next({ request: { headers: requestHeaders } });

  const isProtectedRoute =
    pathname.startsWith('/clientworks') || pathname.startsWith('/clientworks_jp');

  if (!isProtectedRoute) return nextWithHeaders();

  const validUser = process.env.BASIC_AUTH_USER?.trim();
  const validPassword = process.env.BASIC_AUTH_PASSWORD?.trim();
  if (!validUser || !validPassword) {
    if (process.env.NODE_ENV === 'production') {
      return new NextResponse('Authentication is not configured', {
        status: 503,
      });
    }
    return nextWithHeaders();
  }

  const basicAuth = request.headers.get('authorization');
  if (basicAuth?.startsWith('Basic ')) {
    try {
      const authValue = basicAuth.slice('Basic '.length);
      const decoded = decodeBase64(authValue);
      const separatorIndex = decoded.indexOf(':');
      const user = separatorIndex >= 0 ? decoded.slice(0, separatorIndex) : '';
      const pwd = separatorIndex >= 0 ? decoded.slice(separatorIndex + 1) : '';

      if (user === validUser && pwd === validPassword) {
        return nextWithHeaders();
      }
    } catch {
      // fall through to 401
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
