import DormitoryCarousel from './dormitory-carousel';

const Dormitory = () => {
  return (
    <div className="mt-15 px-4 md:px-36 lg:px-44">
      <p className="font-semibold text-center">기숙사 관별 룸메이트 찾기</p>
      <div className="mt-5">
        <DormitoryCarousel />
      </div>
    </div>
  );
};

export default Dormitory;
