import { prismaClient } from "@/lib/prisma_client";

/**
 * Get banned operators.
 */
export async function GET() {
    const entries = await prismaClient.bannedOperators.findMany();

    const opList: Array<string> = [];

    entries.forEach((entry) => {
        opList.push(entry.id);
    });

    return Response.json({
        operators: [],
    });
}

/**
 * Ban the operator.
 *
 * No, this DOES NOT follow RESTful API standard.
 */
export async function DELETE() {
    const highestOp = await prismaClient.memberVote.findMany({
        orderBy: {
            count: "desc",
        },
        take: 1,
    });

    // wipe member votes
    await prismaClient.memberVote.deleteMany({});

    // add to bannedlist
    await prismaClient.bannedOperators.create({
        data: {
            id: highestOp[0].id,
            count: highestOp[0].count,
        },
    });

    return Response.json({ highestOp });
}
