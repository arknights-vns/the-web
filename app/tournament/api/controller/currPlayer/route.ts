//Vote control endpoint
/*
    /api/controller/currPlayer
    POST Params: set (String)
    Response: { name: "salt" },
 */
import { NextRequest } from "next/server";

export async function GET() {
    return Response.json({ name: "salt" }, { status: 200 });
}

export async function POST(req: NextRequest) {
    const r = await req.text();
    const data = JSON.parse(r);
    return Response.json({ name: data.name }, { status: 200 });
}
