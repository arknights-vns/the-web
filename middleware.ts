import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const hostname = request.headers.get("host") || "";
    const allowedHosts = ["localhost:3000", "127.0.0.1:3000"];

    if (!allowedHosts.includes(hostname)) {
        return NextResponse.json({ error: "Access denied - internal use only" }, { status: 403 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/controller/:path*",
};
