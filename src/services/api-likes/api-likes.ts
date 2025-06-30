export const insertIsLike = async (likerId: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/likes`, {
      method: 'POST',
      body: JSON.stringify(likerId),
      credentials: 'include',
    });

    if (!res.ok) {
      return { success: false };
    }

    return { success: true };
  } catch (e) {
    console.error('좋아요 추가 오류:', e);
    return {
      success: false,
      message: '서버 오류가 발생하였습니다. 관리자에게 문의주세요.',
    };
  }
};

export const deleteIsLike = async (likerId: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/likes`, {
      method: 'DELETE',
      body: JSON.stringify(likerId),
      credentials: 'include',
    });

    if (!res.ok) {
      return { success: false };
    }

    return { success: true };
  } catch (e) {
    console.error('좋아요 삭제 오류:', e);
    return {
      success: false,
      message: '서버 오류가 발생하였습니다. 관리자에게 문의주세요.',
    };
  }
};
