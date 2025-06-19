//Controller logon (sanity check) endpoint

/*
    /api/controller/logon
    Required header: X-VNS-TUSDATHE (Contains Token)
 */

import { headers } from "next/headers";

export async function GET() {
    const headerList = await headers();
    const token = headerList.get("X-VNS-TUSDATHE");
    //SHA256 sum of TOKEN in .env
    if (token === process.env.TOKEN) return Response.json({ msg: "ok" }, { status: 200 });
    else return Response.json({ msg: "failed" }, { status: 400 });
}
