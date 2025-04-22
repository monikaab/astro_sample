// components/Table/CellComponent.tsx
import type { Cell } from "@tanstack/solid-table";
import { flexRender } from "@tanstack/solid-table";

const CellComponent = <T,>({ cell }: { cell: Cell<T, unknown> }) => {
  return (
    <td class="p-2 border border-gray-200">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};

export default CellComponent;
