import { MemberOperatorChoice } from "@/app/tournament/api/vote/dto/choice";
import { OperatorSelectionCounter } from "@/app/tournament/api/vote/dto/selection";
import { prismaClient } from "@/lib/prisma_client";
import { type NextRequest } from "next/server";

/**
 * Get operator with HIGHEST count in the time interval.
 */
export async function GET() {
    const entry = await prismaClient.memberVote.findFirstOrThrow({
        orderBy: {
            count: "desc",
        },
    });

    // re-cast prisma to DTO because I can.
    const result: OperatorSelectionCounter = JSON.parse(JSON.stringify(entry));

    return Response.json(result);
}

/**
 * Send operator choices.
 * The choice will be truncated to 6 items.
 */
export async function POST(req: NextRequest) {
    const entries: MemberOperatorChoice = JSON.parse(await req.json());

    await prismaClient.memberVote.updateMany({
        where: {
            id: {
                in: entries.operators.slice(0, 5),
            },
        },
        data: {
            count: {
                increment: 1,
            },
        },
    });

    return new Response("", { status: 200 });
}
