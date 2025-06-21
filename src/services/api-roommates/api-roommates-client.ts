import { RoomMateProfileType } from '@/types/roommates';

export const fetchRoommateList = async (filters: any = {}) => {
  try {
    const searchParams = new URLSearchParams();

    const {
      page = 1,
      pageSize = 10,
      dormitory,
      gender,
      mbti,
      room_type,
      smoking,
      indoor_eating,
      sleep_habit,
      sleep_pattern,
      matching_status,
      sociabilityMin,
      sociabilityMax,
      cleanlinessMin,
      cleanlinessMax,
    } = filters;

    searchParams.append('page', page.toString());
    searchParams.append('pageSize', pageSize.toString());

    if (dormitory) searchParams.append('dormitory', dormitory);
    if (gender) searchParams.append('gender', gender);
    if (mbti) searchParams.append('mbti', mbti);
    if (room_type) searchParams.append('room_type', room_type);
    if (smoking !== undefined) {
      searchParams.append('smoking', smoking.toString());
    }
    if (indoor_eating !== undefined) {
      searchParams.append('indoor_eating', indoor_eating.toString());
    }
    if (sleep_habit) searchParams.append('sleep_habit', sleep_habit.toString());
    if (sleep_pattern) searchParams.append('sleep_pattern', sleep_pattern);
    if (matching_status) {
      searchParams.append('matching_status', matching_status.toString());
    }

    // 범위 필터 파라미터
    if (sociabilityMin !== undefined) {
      searchParams.append('sociabilityMin', sociabilityMin.toString());
    }
    if (sociabilityMax !== undefined) {
      searchParams.append('sociabilityMax', sociabilityMax.toString());
    }
    if (cleanlinessMin !== undefined) {
      searchParams.append('cleanlinessMin', cleanlinessMin.toString());
    }
    if (cleanlinessMax !== undefined) {
      searchParams.append('cleanlinessMax', cleanlinessMax.toString());
    }

    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_KEY
      }/api/roommates?${searchParams.toString()}`,
      {
        credentials: 'include',
      }
    );

    if (!res.ok) {
      console.log(res);
      throw new Error('HTTP 상태 에러');
    }

    const data = await res.json();

    return data;
  } catch (e) {
    console.error('룸메이트 목록 조회 실패:', e);
    throw e;
  }
};

export const registerRoomMateProfile = async (profile: RoomMateProfileType) => {
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
