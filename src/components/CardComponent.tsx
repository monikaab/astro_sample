// components/CardComponent.tsx
import { For, type JSX } from "solid-js";

interface TeamMember {
  initials: string;
  color: string;
}

interface CardComponentProps {
  title: string;
  team?: TeamMember[];
  children: JSX.Element;
  rightContent?: JSX.Element;
}

const CardComponent = (props: CardComponentProps) => {
  return (
    <div class="flex justify-center">
      <div class="w-[90%] bg-white shadow-md rounded-lg m-1">
        <div class="border-b border-gray-400 pb-2">
          <div class="flex justify-between items-center px-4 pt-4">
            <h2 class="font-bold text-base leading-[1.5] tracking-normal">
              {props.title}
            </h2>
            <div class="flex items-center gap-2">
              {props.rightContent ? (
                props.rightContent
              ) : (
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
              )}
            </div>
          </div>
        </div>

        <div class="px-4 py-2">{props.children}</div>
      </div>
    </div>
  );
};

export default CardComponent;