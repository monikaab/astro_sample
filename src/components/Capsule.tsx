import { type Component, type JSX } from "solid-js";

type CapsuleProps = {
  text: string;
  color?: string; // Tailwind background class, e.g., 'bg-orange-400'
  textColor?: string; // Tailwind text color class, e.g., 'text-white'
  icon?: JSX.Element;
};

const Capsule: Component<CapsuleProps> = (props) => {
  return (
    <div
      class={`flex items-center justify-center w-fit min-w-11 h-6 gap-1.5 px-2.5 py-0 rounded-lg font-inter font-semiBold text-s leading-[1.5] tracking-normal
${props.textColor ?? "text-white"} ${props.color ?? "bg-orange-400"}`}

    >
      <span>{props.text}</span>
      {props.icon}
    </div>
  );
};

export default Capsule;
