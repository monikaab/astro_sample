// columns/vouchingColumns.ts
import type { ColumnDef } from "@tanstack/solid-table";

export const vouchingColumns: ColumnDef<any, any>[] = [
  {
    accessorKey: "Voucher No.",
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
  {
    accessorKey: "Amount",
    header: () => "Amount",
    cell: (info) => info.getValue() || "-",
  },
  {
    accessorKey: "Items to check",
    header: () => "Items to check",
    cell: (info) => info.getValue() || "-",
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
