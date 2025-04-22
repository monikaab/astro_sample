import type { ColumnDef } from "@tanstack/solid-table";

export const vouchingColumns: ColumnDef<any, any>[] = [
  {
    id: "voucherNo",
    accessorFn: (row) => row["Voucher No."],
    header: () => "Voucher No.",
    cell: (info) => info.getValue() || "-",
  },
  {
    accessorKey: "Recording data",
    header: () => "Recording data",
    cell: (info) => info.getValue() || "-",
  },
  {
    accessorKey: "Description",
    header: () => "Description",
    cell: (info) => info.getValue() || "-",
  },
  {
    accessorKey: "Corresponding account",
    header: () => "Corresponding account",
    cell: (info) => info.getValue() || "-",
  },

  // Grouped Column: Amount
  {
    id: "amountGroup",
    header: () => "Amount",
    columns: [
      {
        accessorKey: "DR",
        header: () => "DR",
        cell: (info) => info.getValue() || "-",
      },
      {
        accessorKey: "CR",
        header: () => "CR",
        cell: (info) => info.getValue() || "-",
      },
    ],
  },

  // Grouped Column: Items to Check
  {
    id: "itemsToCheckGroup",
    header: () => "Items to check",
    columns: [
      {
        accessorKey: "A",
        header: () => "A",
        cell: (info) => info.getValue() || "-",
      },
      {
        accessorKey: "B",
        header: () => "B",
        cell: (info) => info.getValue() || "-",
      },
      {
        accessorKey: "C",
        header: () => "C",
        cell: (info) => info.getValue() || "-",
      },
      {
        accessorKey: "D",
        header: () => "D",
        cell: (info) => info.getValue() || "-",
      },
      {
        accessorKey: "E",
        header: () => "E",
        cell: (info) => info.getValue() || "-",
      },
    ],
  },

  {
    accessorKey: "Evidence",
    header: () => "Evidence",
    cell: (info) =>
      info.getValue() ? (
        <span class="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
          {info.getValue()}
        </span>
      ) : (
        "-"
      ),
  },
];
