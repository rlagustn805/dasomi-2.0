import { LoaderCircle } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoaderCircle className="animate-spin" color="green" />
    </div>
  );
};

export default Loading;
