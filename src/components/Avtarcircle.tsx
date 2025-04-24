type AvatarCircleProps = {
    letter: string;
    bgColor?: string;  // e.g., 'bg-gray-800'
    textColor?: string; // e.g., 'text-white'
  };
  
  const AvatarCircle = (props: AvatarCircleProps) => {
    return (
      <div
        class={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
          props.bgColor ?? "bg-gray-800"
        } ${props.textColor ?? "text-white"}`}
      >
        {props.letter}
      </div>
    );
  };
  
  export default AvatarCircle;
  