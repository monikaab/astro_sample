// components/Table/CellComponent.tsx
import type { Cell } from "@tanstack/solid-table";
import { flexRender } from "@tanstack/solid-table";

const CellComponent = <T,>({ cell }: { cell: Cell<T, unknown> }) => {
  return (
    <td class="p-1 border border-gray-300">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};

export default CellComponent;
