import RmCardHeader from './rm-card-header';
import RmCardInfo from './rm-card-info';
import { Card } from '@/components/ui/card';
import RmCardCondition from './rm-card-condition';
import RmCardMsg from './rm-card-msg';
import RmCardContact from './rm-card-contact';
import { RoommateCardData } from '@/types/roommates';

type isUser = {
  currentUserId: string | null;
  currentUserGender: string | null;
};

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
  isLiked,
  users,
  currentUserId,
  currentUserGender,
  roommateId,
}: RoommateCardData & isUser) => {
  return (
    <Card className="p-4">
      <RmCardHeader
        nickname={users.nickname}
        mbti={users.mbti}
        gender={users.gender}
        id={users.id}
        currentUserId={currentUserId}
        isLiked={isLiked}
        roommateId={roommateId}
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
      <RmCardContact
        kakaoOpenLink={kakaoOpenLink}
        dormitory={dormitory}
        id={users.id}
        gender={users.gender}
        currentUserId={currentUserId}
        currentUserGender={currentUserGender}
        matchingStatus={matchingStatus}
      />
    </Card>
  );
};

export default RmCard;
