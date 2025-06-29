//Vote control endpoint

/*
    /api/controller/vote
    POST Params: action (lock/unlock/timerStart)
    Response: { status: "locked", opNum: 1, voteCount: 727, timerStatus: "started", timeRemain: "04:20" },
 */

// on vote unlock, show QR Code using google graph

export async function GET() {
    //todo: actually check vote status
    return Response.json(
        { status: "locked", opNum: 1, voteCount: 727, timerStatus: "started", timeRemain: "04:20" },
        { status: 200 },
    );
}

export async function POST() {
    //todo: actually set vote status
    return Response.json({ status: "unlocked" }, { status: 200});
}