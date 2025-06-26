import { RoommateInfo } from '@/types/roommates';

export const registerRoommateProfile = async (profile: RoommateInfo) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/roommates/me`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || '등록에 실패했습니다.');
    }

    console.log('등록 성공:', data.message);
  } catch (e) {
    console.error('등록 에러:', e);
  }
};

export const updateRoommateProfile = async (profile: RoommateInfo) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/roommates/${profile.roommateId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(profile),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || '업데이트에 실패했습니다.');
    }
  } catch (e) {
    console.error('룸메이트 업데이트 에러 : ', e);
  }
};

export const deleteRoommateProfile = async (profile: RoommateInfo) => {
  const confirmed = window.confirm(
    '정말로 이 룸메이트 프로필을 삭제하시겠습니까?'
  );
  if (!confirmed) return;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/roommates/${profile.roommateId}`,
      {
        method: 'DELETE',
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error ?? '삭제에 실패했습니다.');
    }
  } catch (e) {
    console.error('룸메이트 프로필 삭제 에러 : ', e);
  }
};

// export const fetchLikedRoommateList = async ({ page }: any) => {
//   try {
//     const response = await fetch(`/api/roommates/likes?page=${page}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include',
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(
//         errorData.error || '찜한 룸메이트 목록을 불러오는데 실패했습니다.'
//       );
//     }

//     const result = await response.json();
//     return {
//       success: true,
//       data: result.data,
//       total: result.total,
//       currentUserGender: result.currentUserGender,
//       currentUserId: result.currentUserId,
//     };
//   } catch (error) {
//     console.error('찜한 룸메이트 목록 조회 오류:', error);
//     return {
//       success: false,
//       error:
//         error instanceof Error
//           ? error.message
//           : '알 수 없는 오류가 발생했습니다.',
//       data: [],
//       total: 0,
//     };
//   }
// };
