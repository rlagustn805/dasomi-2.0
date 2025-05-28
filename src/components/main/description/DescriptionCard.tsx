import CommentIcon from '@/assets/icon/comment-icon';
import NoticeIcon from '@/assets/icon/notice-icon';
import People from '@/assets/icon/people-icon';

const descriptions = [
  {
    title: '룸메이트 매칭',
    description:
      '나와 맞는 룸메이트를 찾아보세요. 생활 패턴, MBTI 등 다양한 조건으로 필터링할 수 있습니다.',
    icon: <People />,
  },
  {
    title: '대나무숲',
    description:
      '기숙사 생활에 대한 이야기를 자유롭게 나눌 수 있는 커뮤니티 공간입니다.',
    icon: <CommentIcon />,
  },
  {
    title: '기숙사 공지사항',
    description: '기숙사 관련 중요 공지사항을 한눈에 확인할 수 있습니다.',
    icon: <NoticeIcon />,
  },
];

const DescriptionCard = () => {
  return (
    <>
      {descriptions.map(description => (
        <div key={description.title} className="border border-gray-200 p-3">
          <div className="text-green-600 rounded-full bg-green-100 inline-block p-3">
            {description.icon}
          </div>
          <p className="my-3 font-semibold">{description.title}</p>
          <p className="text-sm text-gray-500">{description.description}</p>
        </div>
      ))}
    </>
  );
};

export default DescriptionCard;
