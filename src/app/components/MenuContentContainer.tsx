import React from 'react';

type TMenuContentContainer = {
  content: React.ReactElement;
};

function MenuContentContainer({ content }: TMenuContentContainer) {
  return (
    <div className="absolute animate-fill1 rounded-xl border-2 border-c2 p-4 bg-bluedark/[.8] right-[-30px]">
      {content}
    </div>
  );
}

export default MenuContentContainer;
