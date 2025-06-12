'use client';

import { useState } from 'react';
import CmFilterField from '../common/cm-filter-field';
import CmMbti from '../common/cm-mbti';
import { Button } from '../ui/button';
import { updateUserProfile } from '@/services/api-users/api-users-client';
import { Enums } from '@/types/supabase';

type MbtiType = Enums<'mbti_enum'>;

const ProfileMbti = ({ value }: { value: MbtiType }) => {
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

  const handleMbtiChange = (newValue: MbtiType) => {
    setMbti(newValue);
  };

  return (
    <>
      <div className="flex flex-col gap-3 md:flex-row md:items-end ">
        <CmFilterField label="MBTI">
          <CmMbti value={mbti} onChange={handleMbtiChange} />
        </CmFilterField>
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
