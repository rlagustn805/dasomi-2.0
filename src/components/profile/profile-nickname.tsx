'use client';

import React, { useState } from 'react';
import Cmfield from '../common/cm-field';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { updateUserProfile } from '@/services/api-users/api-users-client';
import { TablesUpdate } from '@/types/supabase';

const ProfileNickname = ({
  value,
}: {
  value: TablesUpdate<'users'>['nickname'];
}) => {
  const [nickname, setNickname] = useState(value ?? '');
  const [isUpdating, setIsUpdating] = useState(false);
  const [originalNickname, setOriginalNickname] = useState(value);
  const [res, setRes] = useState({ msg: '', isError: false });

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setRes({ msg: '', isError: false }); // 메시지 초기화
  };

  const isValid = /^[가-힣a-zA-Z0-9]{2,8}$/.test(nickname);
  const isSameAsOriginal = nickname === originalNickname;

  const updateNickname = async () => {
    if (!isValid || isSameAsOriginal) return;

    setIsUpdating(true);

    const { success, message } = await updateUserProfile({
      nickname,
    });

    setRes({ msg: message, isError: !success });

    if (success) {
      setOriginalNickname(nickname);
    }

    setIsUpdating(false);
  };

  return (
    <Cmfield label="닉네임">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:max-w-[300px]">
        <Input value={nickname} onChange={handleNicknameChange} />
        <Button
          disabled={!isValid || isSameAsOriginal || isUpdating}
          onClick={updateNickname}>
          {isUpdating ? '변경 중...' : '변경하기'}
        </Button>
      </div>

      <p
        className={`${
          res.isError ? 'text-red-500' : 'text-green-600'
        } text-xs mt-1`}>
        {res.msg}
      </p>
    </Cmfield>
  );
};

export default ProfileNickname;
