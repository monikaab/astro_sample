import Table from "./Table/Table";
import { vouchingColumns } from "../columns/vouchingColumns";
import SearchInput from "./SearchInput";
import expandIcon from "../assets/expand.svg";
import Capsule from "./Capsule";

export default function VouchingTable(data: any) {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <Table
      title="Page #1 Test"
      data={data.data}
      columns={vouchingColumns}
      renderLeftContent={() => (
        <div class="flex items-center gap-1">
          <img src={expandIcon.src} alt="expand" class="w-5 h-5" />
          <Capsule
            text="C"
            color="bg-green-200"
            textColor="text-gray-800"
          />
          <Capsule
            text="R/O"
            color="bg-purple-500"
            textColor="text-gray-800"
          />
        </div>
      )}
      renderRightContent={() => (
        <div class="flex items-center gap-2">
          <SearchInput />
          <button
            onClick={handleClick}
            class="bg-purple-400 w-20 h-10 px-4 py-1.5 rounded-lg font-inter text-sm text-white leading-[1.5] tracking-normal flex items-center justify-center text-center"
          >
            Upload
          </button>

        </div>
      )}
      renderFooterRow={() => {
        const totalAmountRecorded = data.data.reduce((sum, row) => sum + row.amountRecorded, 0);
        const totalAmountVerified = data.data.reduce((sum, row) => sum + row.amountVerified, 0);

        return (
          <>
            {/* Merge first two columns */}
            <td colSpan={2} class="font-inter p-1 justify-center text-center border border-gray-400 text-xs font-semibold text-gray-300 bg-gray-111">
              Total newly acquired assets in 2020
            </td>

            {/* Description */}
            <td class="p-1 border border-gray-400 bg-purple-80"></td>

            {/* Corresponding account */}
            <td class="p-1 border border-gray-400 bg-purple-80"></td>

            {/* DR */}
            <td class="font-inter p-1 border border-gray-400 text-right text-xs font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle text-gray-800 bg-white">
              {totalAmountRecorded}
            </td>

            {/* CR */}
            <td class="font-inter p-1 border border-gray-400 text-right text-xs font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle text-gray-800 bg-white">
              {totalAmountVerified}
            </td>

            {/* A–E check columns (just placeholders) */}
            {Array.from({ length: 5 }).map((_, idx) => (
              <td key={`footer-check-${idx}`} class="p-1 border border-gray-400 bg-purple-80"></td>
            ))}

            {/* Evidence */}
            <td class="p-1 border border-gray-400 bg-purple-80"></td>
          </>
        );
      }}
    />
  );
}
