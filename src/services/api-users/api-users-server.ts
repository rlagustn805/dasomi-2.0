import { headers } from 'next/headers';
import { API_URL } from '@/lib/config';

export const fetchUserProfile = async () => {
  try {
    const cookieHeader = (await headers()).get('cookie') ?? '';
    const res = await fetch(`${API_URL}/api/users/me`, {
      headers: {
        cookie: cookieHeader,
      },
      credentials: 'include',
    });
    const profile = await res.json();
    return profile;
  } catch (e) {
    console.error('오류 : ', e);
    return null;
  }
};
