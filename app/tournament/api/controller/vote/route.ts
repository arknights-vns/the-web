//Vote control endpoint

/*
    /api/controller/vote
    POST Params: action (lock/unlock/timerStart)
    Response: { status: "locked", opNum: 1, voteCount: 727, timerStatus: "started", timeRemain: "04:20" },
 */

// on vote unlock, show QR Code using google graph

import { NextRequest } from "next/server";

export async function GET() {
    //todo: actually check vote status
    return Response.json(
        { status: "locked", opNum: 1, voteCount: 727, timerStatus: "started", timeRemain: "04:20" },
        { status: 200 },
    );
}

export async function POST(res: NextRequest) {
    const actions = ["lock", "timer", "timerReset", "showRes"];
    const r = await res.text();
    const data = JSON.parse(r);
    if (!actions.includes(data.action)) {
        return Response.json({ msg: "invalid action" }, { status: 400 });
    } else {
        //todo: actually set vote status
        return Response.json({ status: "unlocked" }, { status: 200 });
    }
}