interface TeamMember {
  initials: string;
  color: string;
}

interface CardComponentProps {
  title: string;
  team?: TeamMember[];
  renderRightContent?: () => JSX.Element;
  children: JSX.Element;
}

const CardComponent = (props: CardComponentProps) => {
  return (
    <div class="flex justify-center">
      <div class="w-[90%] p-4 bg-white shadow-md rounded-lg m-1">
        <div class="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
          <h2 class="font-bold text-base leading-[1.5] tracking-normal">{props.title}</h2>
          {props.renderRightContent && props.renderRightContent()}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default CardComponent;
