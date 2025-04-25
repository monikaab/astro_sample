import {
  createSolidTable,
  getCoreRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
} from "@tanstack/solid-table";
import type { JSX } from "solid-js";
import CardComponent from "../CardComponent";
import RowComponent from "./RowComponent";
import { createSignal } from "solid-js";

interface TeamMember {
  initials: string;
  color: string;
}

interface TableRootProps<T> {
  title: string;
  team?: TeamMember[];
  data: T[];
  columns: ColumnDef<T, any>[];
  renderRightContent?: () => JSX.Element;
  renderLeftContent?: () => JSX.Element;
  renderFooterRow?: () => JSX.Element;
}

const TableRoot = <T extends Record<string, any>>(props: TableRootProps<T>): JSX.Element => {
  const [sorting, setSorting] = createSignal<SortingState>([]);
  const table = createSolidTable({
    data: props.data,
    columns: props.columns,
    state: {
      get sorting() {
        return sorting();
      },
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <CardComponent
      title={props.title}
      team={props.team}
      renderLeftContent={props.renderLeftContent}
      renderRightContent={props.renderRightContent}
    >
      <div class="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <table class="w-full border-separate border-spacing-0">
          <thead class="bg-purple-80">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr>
                {headerGroup.headers.map((header) => (
                  <th
                    class={`p-1 border border-gray-300 font-semibold text-sm leading-[1.5] tracking-normal ${((header.column.columnDef.meta as { class?: string }) || {}).class ?? ""}`}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder
                      ? null
                      : typeof header.column.columnDef.header === "function"
                        ? header.column.columnDef.header(header.getContext())
                        : header.column.columnDef.header}
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
          {props.renderFooterRow && (
            <tfoot class="bg-purple-80">
              <tr>
                {props.renderFooterRow()}
              </tr>
            </tfoot>
          )}

        </table>
      </div>
    </CardComponent>
  );
};

export default TableRoot;