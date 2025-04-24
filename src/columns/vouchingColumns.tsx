import type { ColumnDef } from "@tanstack/solid-table";
import AvatarCircle from "../components/Avtarcircle";
import A from "../assets/A.svg"; // Adjust the import path based on your project structure
import B from "../assets/B.svg"; // Adjust the import path based on your project structure
import C from "../assets/C.svg"; // Adjust the import path based on your project structure  
import D from "../assets/D.svg"; // Adjust the import path based on your project structure
import E from "../assets/E.svg"; // Adjust the import path based on your project structure

export const vouchingColumns: ColumnDef<any, any>[] = [
  {
    id: "voucherNo",
    accessorFn: (row) => row["Voucher No."],
    header: () => "Voucher No.",
    cell: (info) => info.getValue() ? (
      <div class="flex gap-1 Justify-center font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
>
        {info.getValue()}
      </div>
    ) : (
      "-"
    )
  },
  {
    accessorKey: "Recording data",
    header: () => "Recording data",
    cell: (info) => info.getValue() ? (
      <div class="flex gap-1 justify-end font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
>
        {info.getValue()}
      </div>
    ) : (
      "-"
    )
  },
  {
    accessorKey: "Description",
    header: () => "Description",
    cell: (info) => info.getValue() ? (
      <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
>
        {info.getValue()}
      </div>
    ) : (
      "-"
    )
  },
  {
    accessorKey: "Corresponding account",
    header: () => "Corresponding account",
    cell: (info) => info.getValue() ? (
      <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
>
        {info.getValue()}
      </div>
    ) : (
      "-"
    )
  },

  // Grouped Column: Amount
  {
    id: "amountGroup",
    header: () => (
      <div class="flex items-center justify-center font-inter font-semibold text-xs leading-[1.5] tracking-normal text-gray-800">
        Amount
        </div>
    ),
    columns: [
      {
        accessorKey: "DR",
        header: () => "DR",
        cell: (info) => info.getValue() ? (
          <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
    >
            {info.getValue()}
          </div>
        ) : (
          "-"
        )
      },
      {
        accessorKey: "CR",
        header: () => "CR",
        cell: (info) => info.getValue() ? (
          <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
    >
            {info.getValue()}
          </div>
        ) : (
          "-"
        )
      },
    ],
  },

  // Grouped Column: Items to Check
  {
    id: "itemsToCheckGroup",
    header: () => (<div class="flex items-center justify-center font-inter font-semibold text-xs leading-[1.5] tracking-normal text-gray-800">
      Items to check
      </div>
    ),
    columns: [
      {
        accessorKey: "A",
        header: () => <img src={A.src} alt="check" class="w-5 h-5" />,
        cell: (info) => info.getValue() ? (
          <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
    >
            {info.getValue()}
          </div>
        ) : (
          "-"
        )
      },
      {
        accessorKey: "B",
        header: () => <img src={B.src} alt="check" class="w-5 h-5" />,
        cell: (info) => info.getValue() ? (
          <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
    >
            {info.getValue()}
          </div>
        ) : (
          "-"
        )
      },
      {
        accessorKey: "C",
        header: () => <img src={C.src} alt="check" class="w-5 h-5" />,
        cell: (info) => info.getValue() ? (
          <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
    >
            {info.getValue()}
          </div>
        ) : (
          "-"
        )
      },
      {
        accessorKey: "D",
        header: () => <img src={D.src} alt="check" class="w-5 h-5" />,
        cell: (info) => info.getValue() ? (
          <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
    >
            {info.getValue()}
          </div>
        ) : (
          "-"
        )
      },
      {
        accessorKey: "E",
        header: () => <img src={E.src} alt="check" class="w-5 h-5"  />,
        cell: (info) => info.getValue() ? (
          <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle"
    >
            {info.getValue()}
          </div>
        ) : (
          "-"
        )
      },
    ],
  },
  {
    accessorKey: "Evidence",
    header: () => "Evidence",
    cell: (info) => (
      <div class="flex justify-end pr-2">
        <input
          type="checkbox"
          checked={!!info.getValue()}
          class="w-4 h-4 accent-blue-600"
        />
      </div>
    ),
  },
];
