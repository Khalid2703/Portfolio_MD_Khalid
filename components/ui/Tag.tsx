
import React from 'react';

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <div className="flex items-center rounded-md bg-accent-cyan/10 px-3 py-1 text-xs font-medium leading-5 text-accent-cyan whitespace-nowrap">
      {text}
    </div>
  );
};

export default Tag;
