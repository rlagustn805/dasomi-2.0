import { headers } from 'next/headers';

export const fetchUserProfile = async () => {
  try {
    const cookieHeader = (await headers()).get('cookie') ?? '';
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`,
      {
        headers: {
          cookie: cookieHeader,
        },
        credentials: 'include',
      }
    );
    const profile = await res.json();
    return profile;
  } catch (e) {
    console.error('오류 : ', e);
    return null;
  }
};
