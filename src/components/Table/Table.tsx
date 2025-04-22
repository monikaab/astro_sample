// components/Table/TableRoot.tsx
import {
  createSolidTable,
  getCoreRowModel,
  type ColumnDef,
} from "@tanstack/solid-table";
import type { JSX } from "solid-js";
import CardComponent from "../CardComponent";
import RowComponent from "./RowComponent";

interface TeamMember {
  initials: string;
  color: string;
}

interface TableRootProps<T> {
  title: string;
  team?: TeamMember[];
  data: T[];
  columns: ColumnDef<T, any>[];
  rightContent?: JSX.Element;
}

const TableRoot = <T extends Record<string, any>>(props: TableRootProps<T>): JSX.Element => {
  const table = createSolidTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <CardComponent title={props.title} team={props.team} rightContent={props.rightContent}>
      <div class="overflow-hidden rounded-xl border border-gray-200">
        <table class="w-full border-separate border-spacing-0">
          <thead class="bg-purple-80">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr>
                {headerGroup.headers.map((header) => (
                  <th
                    class="p-1 border border-gray-200 font-semibold text-sm leading-[1.5] tracking-normal"
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder
                      ? null
                      : header.column.columnDef.header?.(header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <RowComponent row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </CardComponent>
  );
};

export default TableRoot;