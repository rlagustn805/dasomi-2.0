import { RoommateFilterProps, RoommateInfo } from '@/types/roommates';

export const fetchRoommateList = async (filters: RoommateFilterProps = {}) => {
  try {
    const searchParams = new URLSearchParams();

    const {
      page = 1,
      pageSize = 10,
      dormitory,
      gender,
      mbti,
      noise,
      roomType,
      smoking,
      indoorEating,
      sleepHabit,
      sleepPattern,
      matchingStatus,
      sociabilityMin,
      sociabilityMax,
      cleanlinessMin,
      cleanlinessMax,
    } = filters;

    searchParams.append('page', page.toString());
    searchParams.append('pageSize', pageSize.toString());

    if (dormitory) searchParams.append('dormitory', dormitory);
    if (gender) searchParams.append('gender', gender);
    if (noise) searchParams.append('noise', noise);

    if (mbti) searchParams.append('mbti', mbti);
    if (roomType) searchParams.append('room_type', roomType);
    if (smoking) {
      searchParams.append('smoking', smoking.toString());
    }
    if (indoorEating) {
      searchParams.append('indoor_eating', indoorEating.toString());
    }
    if (sleepHabit) searchParams.append('sleep_habit', sleepHabit.toString());
    if (sleepPattern) searchParams.append('sleep_pattern', sleepPattern);
    if (matchingStatus) {
      searchParams.append('matching_status', matchingStatus.toString());
    }

    // 범위 필터 파라미터
    if (sociabilityMin) {
      searchParams.append('sociabilityMin', sociabilityMin.toString());
    }
    if (sociabilityMax) {
      searchParams.append('sociabilityMax', sociabilityMax.toString());
    }
    if (cleanlinessMin) {
      searchParams.append('cleanlinessMin', cleanlinessMin.toString());
    }
    if (cleanlinessMax) {
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

export const fetchRoommateProfile = async () => {
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

export const updateRoommateProfile = async (profile: RoommateInfo) => {
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
