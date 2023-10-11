import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/auth")) {
    let isLogin = request.cookies.get("logged");

    if (isLogin) { // Check explicitly if it's "true"
      return NextResponse.rewrite(
        new URL(request.nextUrl.pathname, request.url)
      );
    } else {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
  }
}
