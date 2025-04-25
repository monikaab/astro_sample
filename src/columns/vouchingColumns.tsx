import type { ColumnDef } from "@tanstack/solid-table";
import sortIcon from "../assets/sorting.svg";
import A from "../assets/A.svg";
import B from "../assets/B.svg";
import C from "../assets/C.svg";
import D from "../assets/D.svg";
import E from "../assets/E.svg";

export const vouchingColumns: ColumnDef<any, any>[] = [
  {
    id: "voucherNo",
    accessorFn: (row) => row["Voucher No."],
    enableSorting: true,
    header: ({ column }) => (
      <div
        class="cursor-pointer flex items-center justify-center gap-1 font-inter font-semibold text-xs leading-[1.5] tracking-normal text-gray-800"
        onClick={() => column.toggleSorting()}
      >
        Voucher No.
        <img src={sortIcon.src} alt="sort" class="w-3 h-3" />
      </div>
    ),
    cell: (info) =>
      info.getValue() ? (
        <div class="flex gap-1 justify-center font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle">
          {info.getValue()}
        </div>
      ) : (
        ""
      ),
  },
  {
    accessorKey: "Recording data",
    enableSorting: true,
    header: ({ column }) => (
      <div
        class="cursor-pointer flex items-center justify-end gap-1 font-inter font-semibold text-xs leading-[1.5] tracking-normal text-gray-800"
        onClick={() => column.toggleSorting()}
      >
        Recording data
        <img src={sortIcon.src} alt="sort" class="w-3 h-3" />
      </div>
    ),
    cell: (info) =>
      info.getValue() ? (
        <div class="flex gap-1 justify-end font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle">
          {info.getValue()}
        </div>
      ) : (
        ""
      ),
  },
  {
    accessorKey: "Description",
    enableSorting: true,
    header: ({ column }) => (
      <div
        class="cursor-pointer flex items-center justify-center gap-1 font-inter font-semibold text-xs leading-[1.5] tracking-normal text-gray-800"
        onClick={() => column.toggleSorting()}
      >
        Description
        <img src={sortIcon.src} alt="sort" class="w-3 h-3" />
      </div>
    ),
    cell: (info) =>
      info.getValue() ? (
        <div class="flex gap-1 font-inter justify-center font-normal text-xs leading-[1.5] tracking-normal align-middle">
          {info.getValue()}
        </div>
      ) : (
        ""
      ),
  },
  {
    accessorKey: "Corresponding account",
    enableSorting: true,
    header: ({ column }) => (
      <div
        class="cursor-pointer flex items-center justify-center gap-1 font-inter font-semibold text-xs leading-[1.5] tracking-normal text-gray-800"
        onClick={() => column.toggleSorting()}
      >
        Corresponding account
        <img src={sortIcon.src} alt="sort" class="w-3 h-3" />
      </div>
    ),
    cell: (info) =>
      info.getValue() ? (
        <div class="flex gap-1 font-inter justify-center font-normal text-xs leading-[1.5] tracking-normal align-middle">
          {info.getValue()}
        </div>
      ) : (
        ""
      ),
  },
  {
    id: "amountGroup",
    header: () => (
      <div class="flex items-center justify-center font-inter font-semibold text-xs leading-[1.5] tracking-normal text-white">
        Amount
      </div>
    ),
    meta: {
      class: "bg-gray-111"
    },
    columns: [
      {
        accessorKey: "DR",
        header: ({ column }) => (<div
          class="cursor-pointer flex items-center justify-center gap-1 font-inter font-semibold text-xs leading-[1.5] tracking-normal text-gray-800"
          onClick={() => column.toggleSorting()}
        >
          DR
          <img src={sortIcon.src} alt="sort" class="w-3 h-3" />
        </div>
        ),
        cell: (info) =>
          info.getValue() ? (
            <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle">
              {info.getValue()}
            </div>
          ) : (
            ""
          ),
      },
      {
        accessorKey: "CR",
        header: ({ column }) => (<div
          class="cursor-pointer flex items-center justify-center gap-1 font-inter font-semibold text-xs leading-[1.5] tracking-normal text-gray-800"
          onClick={() => column.toggleSorting()}
        >
          CR
          <img src={sortIcon.src} alt="sort" class="w-3 h-3" />
        </div>
        ),
        cell: (info) =>
          info.getValue() ? (
            <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle">
              {info.getValue()}
            </div>
          ) : (
            ""
          ),
      },
    ],
  },
  {
    id: "itemsToCheckGroup",
    header: () => (
      <div class="flex items-center justify-center font-inter font-semibold text-xs leading-[1.5] tracking-normal text-white">
        Items to check
      </div>
    ),
    meta: {
      class: "bg-gray-111"
    },
    columns: [
      {
        accessorKey: "A",
        header: () => (
          <div class="flex justify-center">
            <img src={A.src} alt="check" class="w-5 h-5" />
          </div>
        ),
        cell: (info) =>
          info.getValue() ? (
            <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle">
              {info.getValue()}
            </div>
          ) : (
            ""
          ),
      },
      {
        accessorKey: "B",
        header: () => (
          <div class="flex justify-center">
            <img src={B.src} alt="check" class="w-5 h-5" />
          </div>
        ),
        cell: (info) =>
          info.getValue() ? (
            <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle">
              {info.getValue()}
            </div>
          ) : (
            ""
          ),
      },
      {
        accessorKey: "C",
        header: () => (
          <div class="flex justify-center">
            <img src={C.src} alt="check" class="w-5 h-5" />
          </div>
        ),
        cell: (info) =>
          info.getValue() ? (
            <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle">
              {info.getValue()}
            </div>
          ) : (
            ""
          ),
      },
      {
        accessorKey: "D",
        header: () => (
          <div class="flex justify-center">
            <img src={D.src} alt="check" class="w-5 h-5" />
          </div>
        ),
        cell: (info) =>
          info.getValue() ? (
            <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle">
              {info.getValue()}
            </div>
          ) : (
            ""
          ),
      },
      {
        accessorKey: "E",
        header: () => (
          <div class="flex justify-center">
            <img src={E.src} alt="check" class="w-5 h-5" />
          </div>
        ),
        cell: (info) =>
          info.getValue() ? (
            <div class="flex gap-1 font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle">
              {info.getValue()}
            </div>
          ) : (
            ""
          ),
      },
    ],
  },
  {
    accessorKey: "Evidence",
    header: ({ column }) => (
      <div class="flex justify-center">
        <div
          class="cursor-pointer w-50 flex items-center justify-center gap-1 font-inter font-semibold text-xs leading-[1.5] tracking-normal text-gray-800 text-center"
          onClick={() => column.toggleSorting()}
        >
          Evidence
          <img src={sortIcon.src} alt="sort" class="w-3 h-3" />
        </div>
      </div>
    ),
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
