import RmCardHeader from './rm-card-header';
import RmCardInfo from './rm-card-info';
import { Card } from '@/components/ui/card';
import RmCardCondition from './rm-card-condition';
import RmCardMsg from './rm-card-msg';
import RmCardContact from './rm-card-contact';
import { RoommateCardData } from '@/types/roommates';

const RmCard = ({
  dormitory,
  roomType,
  sociability,
  cleanliness,
  smoking,
  indoorEating,
  sleepHabit,
  sleepPattern,
  noise,
  matchingStatus,
  message,
  kakaoOpenLink,
  users,
}: RoommateCardData) => {
  return (
    <Card className="p-4">
      <RmCardHeader
        nickname={users.nickname}
        mbti={users.mbti}
        gender={users.gender}
        dormitory={dormitory}
      />
      <RmCardInfo
        department={users.department}
        year={users.studentId}
        roomType={roomType}
        sociability={sociability}
        cleanliness={cleanliness}
        matchingStatus={matchingStatus}
      />

      <RmCardCondition
        smoking={smoking}
        indoorEating={indoorEating}
        sleepHabit={sleepHabit}
        sleepPattern={sleepPattern}
        noise={noise}
      />

      <RmCardMsg message={message} />

      <RmCardContact kakaoOpenLink={kakaoOpenLink} />
    </Card>
  );
};

export default RmCard;
