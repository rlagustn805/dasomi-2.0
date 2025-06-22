const BadgeItem = ({
  condition,
  trueLabel,
  falseLabel,
}: {
  condition: boolean;
  trueLabel: string;
  falseLabel: string;
}) => {
  return (
    <div className="text-xs">
      {condition ? (
        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
          {trueLabel}
        </span>
      ) : (
        <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-500">
          {falseLabel}
        </span>
      )}
    </div>
  );
};

export default BadgeItem;
