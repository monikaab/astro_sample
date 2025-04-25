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
        <div class="flex justify-between items-center pb-2">
          <div class="flex items-center gap-2">
            <h2 class="font-inter font-bold text-base leading-[1.5] tracking-normal">{props.title}</h2>
            {props.renderLeftContent && props.renderLeftContent()}
          </div>
          {props.renderRightContent && props.renderRightContent()}
        </div>
        <div class=" left-0 right-0 h-px bg-gray-300 -mx-4 mb-2 top-[72px]" />
          {props.children}
      </div>
    </div>
  );
};

export default CardComponent;
