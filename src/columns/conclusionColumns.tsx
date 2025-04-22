// columns/conclusionColumns.ts
import type { ColumnDef } from "@tanstack/solid-table";

export const conclusionColumns: ColumnDef<any, any>[] = [
  {
    accessorKey: "conclusions",
    header: () => "Conclusions",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "Preparation",
    header: () => "Preparation",
    cell: (info) =>
      info.getValue() ? (
        <span class="bg-orange-300 text-white text-xs font-medium px-2 py-1 rounded">
          {info.getValue()} ✓
        </span>
      ) : (
        "-"
      ),
  },
  {
    accessorKey: "Review",
    header: () => "Review",
    cell: (info) =>
      info.getValue() ? (
        <span class="bg-green-400 text-white text-xs font-medium px-2 py-1 rounded">
          {info.getValue()} ✓
        </span>
      ) : (
        "-"
      ),
  },
];
