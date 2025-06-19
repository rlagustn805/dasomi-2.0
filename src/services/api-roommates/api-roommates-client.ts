import {
  RoomMateProfileRegisterType,
  RoomMateProfileType,
} from '@/types/roommates';

export const registerRoomMateProfile = async (
  profile: RoomMateProfileRegisterType
) => {
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

export const fetchRoomMateProfile = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/roommates/me`,
      {
        credentials: 'include',
      }
    );

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || '조회에 실패했습니다.');
    }

    return data;
  } catch (e) {
    console.error('룸메이트 조회 에러 : ', e);
  }
};

export const updateRoomMateProfile = async (profile: RoomMateProfileType) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/roommates/${profile.id}`,
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

    console.log(data);
  } catch (e) {
    console.error('룸메이트 업데이트 에러 : ', e);
  }
};

export const deleteRoomMateProfile = async (profile: RoomMateProfileType) => {
  const confirmed = window.confirm(
    '정말로 이 룸메이트 프로필을 삭제하시겠습니까?'
  );
  if (!confirmed) return;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/roommates/${profile.id}`,
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
