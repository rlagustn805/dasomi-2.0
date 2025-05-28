import DormitoryCard from './DormitoryCard';

const Dormitory = () => {
  return (
    <div className="mt-15 px-4 md:px-10 lg:px-20">
      <p className="font-semibold text-center text-lg">
        기숙사 관별 룸메이트 찾기
      </p>
      <div className="mt-5">
        <DormitoryCard />
      </div>
    </div>
  );
};

export default Dormitory;
