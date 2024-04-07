import React from 'react';

type TMenuContentContainer = {
  content: React.ReactElement;
  onClose: () => void;
};

function MenuContentContainer({ content, onClose }: TMenuContentContainer) {
  return (
    <div className="absolute animate-menuContentOpen top-1/4 w-4/5  p-4 bg-bluedark/[.95] left-[250px]">
      <div
        className="absolute top-2 right-2 opacity-60 hover:opacity-100 cursor-pointer"
        onClick={onClose}
      >
        close
      </div>
      {content}
    </div>
  );
}

export default MenuContentContainer;
