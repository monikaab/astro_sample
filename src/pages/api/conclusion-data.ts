// src/pages/api/vouching-data.ts
import type { APIRoute } from "astro";

const conclusions = [
    {
      conclusions: "The work has been performed in accordance with the audit program.",
      Preparation: "MC",
      Review: "RT",
    },
    {
      conclusions: "The work performed and the results obtained have been adequately documented.",
      Preparation: "MC",
      Review: "SH",
    },
    {
      conclusions: "All necessary information has been collected for the presentation and disclosure in the financial statements.",
    },
    {
      conclusions: "Based on audit procedures performed, the above objectives have been met and without any material exception noted.",
    },
  ];

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ success: true, data: conclusions }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
