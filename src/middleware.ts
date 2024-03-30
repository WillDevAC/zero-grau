import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let hasCookie = request.cookies.has("@token-client");
  const response = NextResponse.next();

  const isAuthenticated = !!hasCookie;

  if (
    request.nextUrl.pathname == "/auth/login" ||
    request.nextUrl.pathname == "/auth/register"
  ) {
    if (isAuthenticated) {
        const rootUrl = `${request.nextUrl.origin}/`;
        return NextResponse.redirect(rootUrl);
    }
    return response;
  }

  if (!isAuthenticated) {
    if (request.nextUrl.pathname === "/") {
      const loginUrl = `${request.nextUrl.origin}/auth/login`;
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|assets|icons|images|locales|manifest.json|sw.js|logo1024.png|scripts|styles).*)",
  ],
};
