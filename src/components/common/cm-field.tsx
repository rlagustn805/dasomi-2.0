import React from 'react';

const CmField = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm">{label}</p>
      {children}
    </div>
  );
};

export default CmField;
