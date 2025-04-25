import Table from "./Table/Table";
import { vouchingColumns } from "../columns/vouchingColumns";
import SearchInput from "./SearchInput";
import expandIcon from "../assets/expand.svg";
import Capsule from "./Capsule";

const vouchingData = [
  {
    "Voucher No.": "200000536",
    "Recording data": "2024-12-01",
    Description: "Payment for services",
    "Corresponding account": "Accounts Payable",
    amountRecorded: 1000,
    amountVerified: 950,
    checkInvoice: "Yes",
    checkContract: "No",
    Evidence: "Attached",
  },
  {
    "Voucher No.": "200000536",
    "Recording data": "2024-12-01",
    Description: "Payment for services",
    "Corresponding account": "Accounts Payable",
    amountRecorded: 1000,
    amountVerified: 950,
    checkInvoice: "Yes",
    checkContract: "No",
    Evidence: "",
  },
  {
    "Voucher No.": "200000536",
    "Recording data": "2024-12-01",
    Description: "Payment for services",
    "Corresponding account": "Accounts Payable",
    amountRecorded: 1000,
    amountVerified: 950,
    checkInvoice: "Yes",
    checkContract: "No",
    Evidence: "",
  },
];

export default function VouchingTable() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <Table
      title="Page #1 Test"
      data={vouchingData}
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
          <button onClick={handleClick} class="bg-purple-400 w-20 h-10 gap-2.5 px-4 py-1.8 rounded-lg font-inter font-small text-sm text-white leading-[1.5] tracking-normal">
            Upload
          </button>
        </div>
      )}
      renderFooterRow={() => {
        const totalAmountRecorded = vouchingData.reduce((sum, row) => sum + row.amountRecorded, 0);
        const totalAmountVerified = vouchingData.reduce((sum, row) => sum + row.amountVerified, 0);
    
        return (
          <>
            {/* Merge first two columns */}
            <td colSpan={2} class="font-inter p-1 justify-center text-center border border-gray-200 text-xs font-semibold text-gray-300 bg-gray-111">
            Total newly acquired assets in 2020
            </td>
    
            {/* Description */}
            <td class="p-1 border border-gray-200"></td>
    
            {/* Corresponding account */}
            <td class="p-1 border border-gray-200"></td>
    
            {/* DR */}
            <td class="font-inter p-1 border border-gray-200 text-right text-xs font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle text-gray-800">
              {totalAmountRecorded}
            </td>
    
            {/* CR */}
            <td class="font-inter p-1 border border-gray-200 text-right text-xs font-inter font-normal text-xs leading-[1.5] tracking-normal align-middle text-gray-800">
              {totalAmountVerified}
            </td>
    
            {/* A–E check columns (just placeholders) */}
            {Array.from({ length: 5 }).map((_, idx) => (
              <td key={`footer-check-${idx}`} class="p-1 border border-gray-200"></td>
            ))}
    
            {/* Evidence */}
            <td class="p-1 border border-gray-200"></td>
          </>
        );
      }}
    />
  );
}
