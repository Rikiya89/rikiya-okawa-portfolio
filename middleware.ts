import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isProtectedRoute =
    pathname.startsWith('/clientworks') || pathname.startsWith('/clientworks_jp');

  if (!isProtectedRoute) return NextResponse.next();

  const validUser = process.env.BASIC_AUTH_USER;
  const validPassword = process.env.BASIC_AUTH_PASSWORD;

  if (!validUser || !validPassword) {
    return new NextResponse('Basic auth is not configured', { status: 500 });
  }

  const basicAuth = request.headers.get('authorization');
  if (basicAuth?.startsWith('Basic ')) {
    try {
      const authValue = basicAuth.slice('Basic '.length);
      const decoded = atob(authValue);
      const separatorIndex = decoded.indexOf(':');
      const user = separatorIndex >= 0 ? decoded.slice(0, separatorIndex) : '';
      const pwd = separatorIndex >= 0 ? decoded.slice(separatorIndex + 1) : '';

      if (user === validUser && pwd === validPassword) {
        return NextResponse.next();
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
  matcher: ['/clientworks/:path*', '/clientworks_jp/:path*'],
};
