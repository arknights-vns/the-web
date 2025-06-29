//Vote control endpoint

/*
    /api/controller/currPlayer
    POST Params: set (String)
    Response: { name: "salt" },
 */

export async function GET() {
    return Response.json({ name: "salt" }, { status: 200 });
}

export async function POST(req) {
    const pName = req.params.name;
    return Response.json({ name: pName }, { status: 200 });
}