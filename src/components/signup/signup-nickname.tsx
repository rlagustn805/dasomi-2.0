'use client';

import { createClient } from '@/lib/supabase/client';
import CmFilterField from '../common/cm-filter-field';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useState } from 'react';
import { SignUpNicknameProps } from './signup-type';

const SignUpNickname = ({
  value,
  isNicknameAvailable,
  handleIsNicknameAvailable,
  onChange,
}: SignUpNicknameProps) => {
  const supabase = createClient();
  const isValid = /^[가-힣a-zA-Z0-9]{2,8}$/.test(value);

  const [isChecking, setIsChecking] = useState(false);
  const [res, setRes] = useState({
    msg: '',
    isError: false,
  });

  const handleChange = (value: string) => {
    onChange(value);
    setRes(prev => ({
      ...prev,
      msg: '',
      isError: false,
    }));
  };

  const nicknameChecking = async () => {
    if (!isValid) return;
    setIsChecking(true);
    const { data, error } = await supabase
      .from('users')
      .select('id')
      .eq('nickname', value)
      .maybeSingle();

    if (error) {
      setRes(prev => ({
        ...prev,
        msg: '서버 오류가 발생하였습니다. 관리자에게 문의주세요.',
        isError: true,
      }));
    } else if (data) {
      setRes(prev => ({
        ...prev,
        msg: '이미 사용중인 닉네임 입니다.',
        isError: true,
      }));
      handleIsNicknameAvailable(false);
    } else {
      setRes(prev => ({
        ...prev,
        msg: '사용가능한 닉네임입니다.',
        isError: false,
      }));
      handleIsNicknameAvailable(true);
    }
    setIsChecking(false);
  };

  return (
    <CmFilterField label="닉네임">
      <Input
        placeholder="특수문자 제외 2~8자"
        value={value}
        onChange={e => handleChange(e.target.value)}
        maxLength={8}
        minLength={2}
      />
      <Button
        disabled={!isValid || isChecking || !isNicknameAvailable}
        onClick={nicknameChecking}>
        {isChecking ? '확인 중... ' : '중복 확인'}
      </Button>
      <p
        className={`${
          res.isError ? 'text-red-500' : 'text-green-600'
        } text-xs`}>
        {res.msg}
      </p>
    </CmFilterField>
  );
};

export default SignUpNickname;
