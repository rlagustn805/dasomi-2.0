import React from 'react';

const CmHeader = ({
  label,
  description,
  children,
}: {
  label: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{label}</h2>
      <p className="text-sm text-gray-400">{description}</p>
      {children}
    </div>
  );
};

export default CmHeader;
