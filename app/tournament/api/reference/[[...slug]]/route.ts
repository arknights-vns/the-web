import { OpenAPI } from "@scalar/nextjs-openapi";

export const { GET } = OpenAPI({
    apiDirectory: "app/tournament/api/vote",
    theme: "elysiajs",
});
