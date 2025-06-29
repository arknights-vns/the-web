import { headers } from "next/headers";
import type { NextRequest } from "next/server";

export const config = {
    matcher: "/tournament/api/controller/:path*",
};

export async function middleware(req: NextRequest) {
    //todo: run this section only when /tournament/api/controller/*
    const headerList = await headers();
    const token = headerList.get("X-VNS-TUSDATHE");
    if (token !== process.env.TOKEN) return Response.json({ msg: "auth failed" }, { status: 403 });
}
