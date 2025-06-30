import { API_URL } from '@/lib/config';

export const fetchUserRate = async () => {
  try {
    const res = await fetch(`${API_URL}/api/admin/user`, {
      credentials: 'include',
    });

    const data = await res.json();

    if (!res.ok) {
      return { message: data.error ?? '가입 / 탈퇴율 조회에 실패하였습니다.' };
    }

    return data;
  } catch (e) {
    console.error(`서버 오류 : ${e}`);
  }
};

export const fetchMatchingRate = async () => {
  try {
    const res = await fetch(`${API_URL}/api/admin/match`, {
      credentials: 'include',
    });

    const data = await res.json();

    if (!res.ok) {
      return { message: data.error ?? '매칭률 조회에 실패하였습니다.' };
    }

    return data;
  } catch (e) {
    console.error(`서버 오류 : ${e}`);
  }
};
