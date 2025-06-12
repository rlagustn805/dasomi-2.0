import { TablesUpdate } from '@/types/supabase';

export const updateUserProfile = async (fieldName: TablesUpdate<'users'>) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/users/me`, {
      method: 'PATCH',
      body: JSON.stringify(fieldName),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.error ?? '업데이트에 실패하였습니다.',
      };
    }

    return {
      success: true,
      message: data.message ?? '업데이트 되었습니다.',
    };
  } catch (e) {
    console.error(`서버 오류 : ${e}`);
    return {
      success: false,
      message: '서버 오류가 발생하였습니다. 관리자에게 문의주세요.',
    };
  }
};

export const deleteUserProfile = async () => {
  try {
    const res = await fetch('/api/users/me', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('응답이 JSON이 아닙니다:', res.status, res.statusText);
      const text = await res.text();
      console.error('실제 응답:', text);
      throw new Error(`서버 오류: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    if (!res.ok) {
      return { success: false, message: data.error || '계정 삭제 실패' };
    }

    return { success: true, message: '계정이 삭제되었습니다.' };
  } catch (e) {
    console.error('계정 삭제 오류:', e);
    return {
      success: false,
      message: '서버 오류가 발생하였습니다. 관리자에게 문의주세요.',
    };
  }
};
