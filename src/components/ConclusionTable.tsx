// components/ConclusionTable.tsx
import { For } from "solid-js";
import Table from "./Table/Table";
import { conclusionColumns } from "../columns/conclusionColumns";

const team = [
  { initials: "MC", color: "#f97316" },
  { initials: "RT", color: "#10b981" },
  { initials: "SH", color: "#14b8a6" },
];

const conclusions = [
  {
    conclusions: "The work has been performed in accordance with the audit program.",
    Preparation: "MC",
    Review: "RT",
  },
  {
    conclusions: "The work performed and the results obtained have been adequately documented.",
    Preparation: "MC",
    Review: "SH",
  },
  {
    conclusions: "All necessary information has been collected for the presentation and disclosure in the financial statements.",
  },
  {
    conclusions: "Based on audit procedures performed, the above objectives have been met and without any material exception noted.",
  },
];

export default function ConclusionTable() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <Table
      title="Page #1 Conclusion"
      team={team}
      data={conclusions}
      columns={conclusionColumns}
      renderRightContent={() => (
        <div class="flex items-center gap-2">
          <div class="flex items-center -space-x-1">
            <For each={team}>
              {(member) => (
                <div
                  class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: member.color }}
                >
                  {member.initials}
                </div>
              )}
            </For>
          </div>
          <button class="bg-purple-400 text-white text-sm p-1 rounded" onClick={handleClick}>View Team</button>
          <button class="bg-orange-400 text-white text-sm p-1 rounded" onClick={handleClick}>
            Show Team
          </button>
        </div>
      )}
    />
  );
}
