import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply to clientworks routes
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/clientworks')) {
    const basicAuth = request.headers.get('authorization');

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      const validUser = process.env.BASIC_AUTH_USER || 'admin';
      const validPassword = process.env.BASIC_AUTH_PASSWORD || 'password';

      if (user === validUser && pwd === validPassword) {
        return NextResponse.next();
      }
    }

    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/clientworks/:path*', '/clientworks_jp/:path*'],
};
