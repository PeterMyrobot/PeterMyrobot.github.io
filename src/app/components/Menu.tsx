import React, { useState } from 'react';
import { IoReorderThreeSharp } from 'react-icons/io5';
import MenuOption from './MenuOption';

type TMenuProps = {
  menuOptions: string[];
  onMenuOptionClick: (option: string) => void;
};

function Menu({ menuOptions, onMenuOptionClick }: TMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className="absolute top-4 left-4"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <button>
        <IoReorderThreeSharp size={30} />
      </button>
      {isMenuOpen && (
        <div className="border-1 border-solid border-white p-4">
          {menuOptions.map((option) => {
            return <MenuOption key={option} optionLabel={option} onClick={onMenuOptionClick} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Menu;
