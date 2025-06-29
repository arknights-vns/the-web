import type { NextRequest } from "next/server";

export const config = {
    matcher: "/tournament/api/controller/:path*",
};

export async function middleware(req: NextRequest) {
    //note: before merging, change url to https://dreamchasers.akvns.org
    if (req.url.startsWith("http://localhost:3000/tournament/api/controller/")) {
        const token = req.headers.get("X-VNS-TUSDATHE");
        if (token !== process.env.TOKEN) return Response.json({ msg: "auth failed" }, { status: 403 });
    }
}
