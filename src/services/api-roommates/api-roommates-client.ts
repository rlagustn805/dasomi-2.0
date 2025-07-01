import { RoommateInfo } from '@/types/roommates';

export const registerRoommateProfile = async (profile: RoommateInfo) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/roommates/me`,
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
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/roommates/${profile.roommateId}`,
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
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/roommates/${profile.roommateId}`,
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
