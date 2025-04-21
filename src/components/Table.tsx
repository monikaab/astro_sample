// components/AuditConclusionTable.tsx
import { For } from "solid-js";

interface TeamMember {
  initials: string;
  color: string; // For avatar background (mock purpose)
}

interface Conclusion {
  [key: string]: string | undefined;
}

interface Props {
  title: string;
  team: TeamMember[];
  conclusions: Conclusion[];
  headers: string[];
}

const AuditConclusionTable = (props: Props) => {
  return (
    <div class="p-4 bg-white shadow-md rounded-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">{props.title}</h2>
        <div class="flex items-center gap-1">
          <For each={props.team}>
            {(member) => (
              <div
                class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: member.color }}
              >
                {member.initials}
              </div>
            )}
          </For>
          <button class="ml-2 px-3 py-1 text-sm bg-purple-500 text-white rounded-md">
            View Team
          </button>
        </div>
      </div>

      <table class="w-full table-auto border-collapse">
        <thead>
          <tr class="bg-gray-100 text-left">
            <For each={props.headers}>
              {(header) => (
                <th class="p-2 border border-gray-200">{header}</th>
              )}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={props.conclusions}>
            {(row) => (
              <tr class="border-t">
                <For each={props.headers}>
                  {(key, index) => (
                    <td class="p-2 border border-gray-200">
                      {row[key.toLowerCase()] ? (
                        key.toLowerCase() === "preparation" ? (
                          <span class="bg-orange-300 text-white text-xs font-medium px-2 py-1 rounded">
                            {row[key.toLowerCase()]} ✓
                          </span>
                        ) : key.toLowerCase() === "review" ? (
                          <span class="bg-green-400 text-white text-xs font-medium px-2 py-1 rounded">
                            {row[key.toLowerCase()]} ✓
                          </span>
                        ) : (
                          row[key.toLowerCase()]
                        )
                      ) : null}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default AuditConclusionTable;