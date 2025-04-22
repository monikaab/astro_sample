import type { ColumnDef } from "@tanstack/solid-table";
import Capsule from "../components/capsule"; // Adjust the import path based on your project structure
import checkIcon from "../assets/checkIcon.svg"; // Replace with your actual check icon path

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
        <Capsule
          text={info.getValue()}
          color="bg-orange-400"
          icon={<img src={checkIcon.src} alt="check" class="w-2 h-2" />}
        />
      ) : (
        "-"
      )
  },
  {
    accessorKey: "Review",
    header: () => "Review",
    cell: (info) =>
      info.getValue() ? (
        <div class="flex gap-1">
          <Capsule
            text={info.getValue()}
            color="bg-green-500"
            icon={<img src={checkIcon.src} alt="check" class="w-2 h-2" />}
          />
          <Capsule
            text="SH"
            color="bg-blue-500"
            icon={<img src={checkIcon.src} alt="check" class="w-2 h-2" />}
          />
        </div>
      ) : (
        "-"
      ),
  },
];
