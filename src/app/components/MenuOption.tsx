import React from 'react';

type TMenuOptionProps = {
  optionLabel: string;
  onClick: (option: string) => void;
};

function MenuOption({ optionLabel, onClick }: TMenuOptionProps) {
  const menuOptionStyle =
    'text-center h-8 m-8 text-xl cursor-pointer border-b-2 border-solid border-c1';

  return (
    <div
      className="relative"
      onClick={() => {
        onClick(optionLabel);
      }}
    >
      <div className="menuOption">{optionLabel}</div>
    </div>
  );
}

export default MenuOption;
