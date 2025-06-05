import { RoomMatesType } from '../type';
import RmCardHeader from './rm-card-header';
import RmCardInfo from './rm-card-info';
import { Card } from '@/components/ui/card';
import RmCardCondition from './rm-card-condition';
import RmCardMsg from './rm-card-msg';
import RmCardContact from './rm-card-contact';

const RmCard = ({
  nickname,
  // gender,
  mbti,
  department,
  year,
  roomType,
  sociability,
  cleanliness,
  smoking,
  indoorEating,
  sleepHabit,
  matchingStatus,
  message,
}: RoomMatesType) => {
  return (
    <Card className="p-4">
      <RmCardHeader nickname={nickname} mbti={mbti} />

      <RmCardInfo
        department={department}
        year={year}
        roomType={roomType}
        sociability={sociability}
        cleanliness={cleanliness}
        matchingStatus={matchingStatus}
      />

      <RmCardCondition
        smoking={smoking}
        indoorEating={indoorEating}
        sleepHabit={sleepHabit}
      />

      <RmCardMsg message={message} />

      <RmCardContact />
    </Card>
  );
};

export default RmCard;
