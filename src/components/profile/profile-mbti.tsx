'use client';

import { useState } from 'react';
import CmField from '../common/cm-field';
import CmMbti from '../common/cm-mbti';
import { Button } from '../ui/button';
import { updateUserProfile } from '@/services/api-users/api-users-client';
import { Users } from '@/types/users';

const ProfileMbti = ({ value }: { value: Users['mbti'] }) => {
  const [mbti, setMbti] = useState(value);
  const [originalMbti, setOriginalMbti] = useState(value);
  const [isUpdating, setIsUpdating] = useState(false);
  const [res, setRes] = useState({ msg: '', isError: false });

  const isSameAsOriginal = mbti === originalMbti;
  const isDisabled = isSameAsOriginal || isUpdating;

  const updateMbti = async () => {
    if (isDisabled) return;

    setIsUpdating(true);

    const { success, message } = await updateUserProfile({
      mbti,
    });

    setRes({ msg: message, isError: !success });

    if (success) {
      setOriginalMbti(mbti);
    }

    setIsUpdating(false);
  };

  const handleMbtiChange = (newValue: Users['mbti']) => {
    setMbti(newValue);
  };

  return (
    <>
      <div className="flex flex-col gap-3 md:flex-row md:items-end ">
        <CmField label="MBTI">
          <CmMbti value={mbti} onChange={handleMbtiChange} />
        </CmField>
        <Button disabled={isDisabled} onClick={updateMbti}>
          {isUpdating ? '변경 중...' : '변경하기'}
        </Button>
      </div>
      {res.msg && (
        <p
          className={`text-xs ${
            res.isError ? 'text-red-500' : 'text-green-600'
          }`}>
          {res.msg}
        </p>
      )}
    </>
  );
};

export default ProfileMbti;
