import React from 'react';
import { IoClose } from 'react-icons/io5';

type TMenuContentContainer = {
  content: React.ReactElement;
  onClose: () => void;
};

function MenuContentContainer({ content, onClose }: TMenuContentContainer) {
  return (
    <div className="absolute animate-menuContentOpen lightBorder top-1/4 w-3/5 h-1/2 p-8 bg-black/90 drop-shadow-lg left-[250px]">
      <div
        className="absolute top-4 right-4 opacity-60 hover:opacity-100 cursor-pointer"
        onClick={onClose}
      >
        <IoClose size="28px" />
      </div>
      {content}
    </div>
  );
}

export default MenuContentContainer;
