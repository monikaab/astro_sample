// components/CardComponent.tsx
import { For, type JSX } from "solid-js";

interface TeamMember {
  initials: string;
  color: string;
}

interface CardComponentProps {
  title: string;
  team: TeamMember[];
  children: JSX.Element;
}

const CardComponent = (props: CardComponentProps) => {
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
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default CardComponent;
