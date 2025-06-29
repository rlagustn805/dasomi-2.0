import { Skeleton } from '@/components/ui/skeleton';

const RmListLoading = () => {
  return (
    <div className="flex flex-col gap-5 col-span-1 lg:col-span-3 justify-between mt-8">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-3 border p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <Skeleton className="w-16 h-16 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="w-1/3 h-4" />
              <Skeleton className="w-2/3 h-4" />
            </div>
          </div>
          <Skeleton className="w-full h-12 rounded-md" />
        </div>
      ))}

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-8 h-8 rounded-md" />
        ))}
      </div>
    </div>
  );
};

export default RmListLoading;
