import type { ColumnDef } from "@tanstack/solid-table";
import Capsule from "../components/Capsule"; // Adjust the import path based on your project structure
import checkIcon from "../assets/checkIcon.svg"; // Replace with your actual check icon path

export const conclusionColumns: ColumnDef<any, any>[] = [
  {
    accessorKey: "conclusions",
    header: () => (
      <div class="flex items-center justify-start gap-1 font-inter font-bold text-sm leading-[1.5] tracking-normal text-gray-800">
        Conclusions
        </div>
    ),
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
    accessorKey: "Preparation",
    header: () => "Preparation",
    cell: (info) =>
      info.getValue() ? (
        <div class="flex justify-end gap-1">
          <Capsule
            text={info.getValue()}
            color="bg-orange-400"
            icon={<img src={checkIcon.src} alt="check" class="w-3 h-2" />}
          />
        </div>
      ) : (
        "-"
      )
  },
  {
    accessorKey: "Review",
    header: () => "Review",
    cell: (info) =>
      info.getValue() ? (
        <div class="flex justify-end gap-1">
          <Capsule
            text={info.getValue()}
            color="bg-green-100"
            icon={<img src={checkIcon.src} alt="check" class="w-3 h-2" />}
          />
          <Capsule
            text="SH"
            color="bg-green-100"
            icon={<img src={checkIcon.src} alt="check" class="w-3 h-2" />}
          />
        </div>
      ) : (
        "-"
      ),
  },
];
