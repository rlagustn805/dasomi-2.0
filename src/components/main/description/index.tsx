import DescriptionCard from './description-card';

const Description = () => {
  return (
    <div className="px-4 md:px-36 lg:px-44 mt-15">
      <h2 className="text-lg font-semibold text-center">다솜이 서비스</h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5">
        <DescriptionCard />
      </div>
    </div>
  );
};

export default Description;
