// components/Table/RowComponent.tsx
import type { Row } from "@tanstack/solid-table";
import CellComponent from "./CellComponent";

const RowComponent = <T extends Record<string, any>>({ row }: { row: Row<T> }): JSX.Element => {
  return (
    <tr class="border-t">
      {row.getVisibleCells().map((cell) => (
        <CellComponent cell={cell} />
      ))}
    </tr>
  );
};

export default RowComponent;
