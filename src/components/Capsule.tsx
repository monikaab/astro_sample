import { type Component, type JSX } from "solid-js";

type CapsuleProps = {
  text: string;
  color?: string; // Tailwind background class, e.g., 'bg-orange-400'
  icon: JSX.Element;
};

const Capsule: Component<CapsuleProps> = (props) => {
  return (
    <div
      class={`flex items-center w-10 gap-1 px-1 py-0.5 rounded-full text-white text-xs ${props.color ?? "bg-orange-400"}`}
    >
      <span>{props.text}</span>
      {props.icon}
    </div>
  );
};

export default Capsule;
