import { type Component, type JSX } from "solid-js";

type CapsuleProps = {
  text: string;
  color?: string; // Tailwind background class, e.g., 'bg-orange-400'
  icon: JSX.Element;
};

const Capsule: Component<CapsuleProps> = (props) => {
  return (
    <div
      class={`flex items-center w-14 h-6 gap-1.5 px-2.5 rounded-lg font-inter font-bold text-xs leading-[1.5] tracking-normal
text-white text-xs ${props.color ?? "bg-orange-400"}`}

    >
      <span>{props.text}</span>
      {props.icon}
    </div>
  );
};

export default Capsule;
