//Controller logon (sanity check) endpoint

/*
    /api/controller/logon
    Response: { "msg": "ok" } if API is online
 */

export async function GET() {
    return Response.json({ status: "ok" }, { status: 200 });
}
