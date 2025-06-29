import { headers } from "next/headers";
import type { NextRequest } from "next/server";

export const config = {
    matcher: "/tournament/api/:path*",
};

export async function middleware(req: NextRequest) {
    const headerList = await headers();
    const token = headerList.get("X-VNS-TUSDATHE");
    if (token !== process.env.TOKEN) return Response.json({ msg: "auth failed" }, { status: 403 });
}
