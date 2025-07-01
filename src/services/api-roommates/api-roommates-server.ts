import { RoommateFilterProps } from '@/types/roommates';
import { headers } from 'next/headers';

export const fetchRoommateProfile = async ({ page }: { page: number }) => {
  const cookieHeader = (await headers()).get('cookie') ?? '';
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/roommates/me?page=${page},`,
      {
        headers: {
          cookie: cookieHeader,
        },
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

export const fetchRoommateList = async (filters: RoommateFilterProps = {}) => {
  try {
    const cookieHeader = (await headers()).get('cookie') ?? '';
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
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/roommates?${searchParams.toString()}`,
      {
        headers: {
          cookie: cookieHeader,
        },
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

export const fetchLikedRoommateList = async ({
  page = 1,
}: {
  page: number;
}) => {
  const cookieHeader = (await headers()).get('cookie') ?? '';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/roommates/likes?page=${page}`,
    {
      headers: {
        cookie: cookieHeader,
      },
    }
  );

  if (!res.ok) throw new Error('찜한 룸메이트 목록 불러오기 실패');
  return res.json();
};

export const fetchRoommateFilters = async (
  filters: RoommateFilterProps = {}
) => {
  const cookieHeader = (await headers()).get('cookie') ?? '';
  const searchParams = new URLSearchParams();

  const {
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
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/roommates/filters?${searchParams.toString()}`,
    {
      headers: {
        cookie: cookieHeader,
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch filters');
  }

  const data = await res.json();
  return data.filters;
};
