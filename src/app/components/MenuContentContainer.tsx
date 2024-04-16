import React from 'react';
import { IoClose } from 'react-icons/io5';

type TMenuContentContainer = {
  content: React.ReactElement;
  onClose: () => void;
};

function MenuContentContainer({ content, onClose }: TMenuContentContainer) {
  return (
    <div className="absolute flex w-full h-full top-0 left-0 justify-center items-center">
      <div className="relative animate-menuContentOpen lightBorder w-3/5 h-3/5 p-8 bg-black/90 drop-shadow-lg">
        <div
          className="absolute top-4 right-4 opacity-60 hover:opacity-100 cursor-pointer"
          onClick={onClose}
        >
          <IoClose size="28px" />
        </div>
        {content}
      </div>
    </div>
  );
}

export default MenuContentContainer;
