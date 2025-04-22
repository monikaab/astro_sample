// components/Table/TableRoot.tsx
import {
  createSolidTable,
  getCoreRowModel,
  type ColumnDef,
} from "@tanstack/solid-table";
import type { Component } from "solid-js";
import CardComponent from "../CardComponent";
import RowComponent from "./RowComponent";

interface TeamMember {
  initials: string;
  color: string;
}

interface TableRootProps<T> {
  title: string;
  team: TeamMember[];
  data: T[];
  columns: ColumnDef<T, any>[];
}

const TableRoot = <T extends Record<string, any>>(props: TableRootProps<T>): JSX.Element => {
  const table = createSolidTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <CardComponent title={props.title} team={props.team}>
      <table class="w-full table-auto border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr>
              {headerGroup.headers.map((header) => (
                <th class="p-2 border border-gray-200" colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : header.column.columnDef.header?.(
                        header.getContext()
                      )}
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
    </CardComponent>
  );
};

export default TableRoot;
