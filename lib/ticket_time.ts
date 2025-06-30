"use server";

import { TZDate } from "@date-fns/tz";

export async function isWithinTicketAllowedTime() {
    const currentDate = new TZDate(new Date(), "Asia/Ho_Chi_Minh");
    const tzDate = new TZDate(2025, 7, 6, "Asia/Ho_Chi_Minh");

    return currentDate >= tzDate;
}
