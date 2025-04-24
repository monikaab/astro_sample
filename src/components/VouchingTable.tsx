import Table from "./Table/Table";
import { vouchingColumns } from "../columns/vouchingColumns";

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
          <input
            type="text"
            placeholder="Search..."
            class="border border-gray-300 rounded px-2 py-1 text-sm"
          />
          <button onClick={handleClick} class="bg-purple-400 text-white text-sm p-1 rounded">
            Upload
          </button>
        </div>
      )}
    />
  );
}
