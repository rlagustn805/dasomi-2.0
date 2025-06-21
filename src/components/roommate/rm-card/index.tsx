import { RoomMatesType } from '../type';
import RmCardHeader from './rm-card-header';
import RmCardInfo from './rm-card-info';
import { Card } from '@/components/ui/card';
import RmCardCondition from './rm-card-condition';
import RmCardMsg from './rm-card-msg';
import RmCardContact from './rm-card-contact';
import { RoomMateItem } from '@/types/roommates';

const RmCard = ({
  dormitory,
  room_type,
  sociability,
  cleanliness,
  smoking,
  indoor_eating,
  sleep_habit,
  sleep_pattern,
  noise,
  matching_status,
  message,
  kakao_open_link,
  users,
}: RoomMateItem) => {
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
        year={users.student_id}
        roomType={room_type}
        sociability={sociability}
        cleanliness={cleanliness}
        matchingStatus={matching_status}
      />

      <RmCardCondition
        smoking={smoking}
        indoorEating={indoor_eating}
        sleepHabit={sleep_habit}
        sleepPattern={sleep_pattern}
        noise={noise}
      />

      <RmCardMsg message={message} />

      <RmCardContact kakaoOpenLink={kakao_open_link} />
    </Card>
  );
};

export default RmCard;
