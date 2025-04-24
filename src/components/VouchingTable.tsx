import Table from "./Table/Table";
import { vouchingColumns } from "../columns/vouchingColumns";
import SearchInput from "./SearchInput";

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
      renderRightContent={() => (
        <div class="flex items-center gap-2">
          <SearchInput />
          <button onClick={handleClick} class="bg-purple-400 w-20 h-10 gap-2.5 px-2 py-1.8 rounded-lg font-inter font-small text-sm text-white leading-[1.5] tracking-normal">
            Upload
          </button>
        </div>
      )}
    />
  );
}
