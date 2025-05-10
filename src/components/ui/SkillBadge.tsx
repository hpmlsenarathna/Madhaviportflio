
import React from "react";

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="inline-block bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-slate hover-lift shadow-sm m-1">
      {name}
    </span>
  );
};

export default SkillBadge;
