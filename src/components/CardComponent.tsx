interface TeamMember {
  initials: string;
  color: string;
}

interface CardComponentProps {
  title: string;
  team?: TeamMember[];
  renderLeftContent?: () => JSX.Element;
  renderRightContent?: () => JSX.Element;
  children: JSX.Element;
}

const CardComponent = (props: CardComponentProps) => {
  return (
    <div class="flex justify-center">
      <div class="w-[90%] p-4 bg-white shadow-md rounded-lg m-1">
        <div class="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
          <div class="flex items-center gap-2">
            <h2 class="font-inter font-bold text-base leading-[1.5] tracking-normal">{props.title}</h2>
            {props.renderLeftContent && props.renderLeftContent()}
          </div>
          {props.renderRightContent && props.renderRightContent()}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default CardComponent;
