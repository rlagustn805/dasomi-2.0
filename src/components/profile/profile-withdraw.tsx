'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { createClient } from '@/lib/supabase/client';
import { deleteUserProfile } from '@/services/api-users/api-users-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const ProfileWithdraw = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleAccountWithdrawOnclick = async () => {
    // 확인 대화상자
    const confirmed = window.confirm(
      '정말로 계정 탈퇴를 진행할까요?\n\n' +
        '이 작업은 되돌릴 수 없어요:\n' +
        '• 모든 개인 정보가 영구적으로 삭제되요.\n' +
        '• 작성한 게시글과 댓글이 모두 삭제되요.\n' +
        '• 카카오 연동 정보가 해제되요.\n' +
        '• 동일한 계정으로 재가입하더라도 기존 데이터는 복구되지 않아요.'
    );

    if (!confirmed) return;

    setIsDeleting(true);
    const { success, message } = await deleteUserProfile();

    if (success) {
      await supabase.auth.signOut();
      toast.success(message);
      router.push('/');
      router.refresh();
    } else {
      toast(`탈퇴 실패: ${message}`);
    }

    setIsDeleting(false);
  };

  return (
    <div className="w-full flex justify-end mt-10">
      <Button
        size="sm"
        variant="destructive"
        onClick={handleAccountWithdrawOnclick}>
        {isDeleting ? '탈퇴중...' : '계정 탈퇴'}
      </Button>
    </div>
  );
};

export default ProfileWithdraw;
