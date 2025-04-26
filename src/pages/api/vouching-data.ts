// src/pages/api/vouching-data.ts
import type { APIRoute } from "astro";

const vouchingData = [
  {
    "Voucher No.": "200000536",
    "Recording data": "2024-12-01",
    "Description": "Payment for services",
    "Corresponding account": "Accounts Payable",
    amountRecorded: 1000,
    amountVerified: 950,
    checkInvoice: "Yes",
    checkContract: "No",
    Evidence: "Attached",
  },
  {
    "Voucher No.": "200000536",
    "Recording data": "2024-12-01",
    "Description": "Payment for services",
    "Corresponding account": "Accounts Payable",
    amountRecorded: 1000,
    amountVerified: 950,
    checkInvoice: "Yes",
    checkContract: "No",
    Evidence: "",
  },
  {
    "Voucher No.": "200000536",
    "Recording data": "2024-12-01",
    "Description": "Payment for services",
    "Corresponding account": "Accounts Payable",
    amountRecorded: 1000,
    amountVerified: 950,
    checkInvoice: "Yes",
    checkContract: "No",
    Evidence: "",
  },
];

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ success: true, data: vouchingData }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
