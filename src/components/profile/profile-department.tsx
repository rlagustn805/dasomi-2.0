'use client';

import { useState } from 'react';
import CmDepartment from '../common/cm-department';
import CmField from '../common/cm-field';
import { Button } from '../ui/button';
import { updateUserProfile } from '@/services/api-users/api-users-client';
import { Users } from '@/types/users';

const ProfileDepartment = ({ value }: { value: Users['department'] }) => {
  const [department, setDepartment] = useState(value);
  const [originalDepartment, setOriginalDepartment] = useState(value);
  const [isUpdating, setIsUpdating] = useState(false);
  const [res, setRes] = useState({
    msg: '',
    isError: false,
  });

  const isSameAsOriginal = department === originalDepartment;
  const isDisabled = isSameAsOriginal || isUpdating;

  const updateDepartment = async () => {
    if (isDisabled) return;

    setIsUpdating(true);

    const { success, message } = await updateUserProfile({
      department,
    });

    setRes({ msg: message, isError: !success });

    if (success) {
      setOriginalDepartment(department);
    }

    setIsUpdating(false);
  };

  const handleDepartmentChange = (newDepartment: string) => {
    setDepartment(newDepartment);
  };

  return (
    <>
      <CmField label="학과">
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          <CmDepartment value={department} onChange={handleDepartmentChange} />
          <Button disabled={isDisabled} onClick={updateDepartment}>
            {isUpdating ? '변경 중...' : '변경하기'}
          </Button>
        </div>

        {res.msg && (
          <p
            className={`text-xs mt-1 ${
              res.isError ? 'text-red-500' : 'text-green-600'
            }`}>
            {res.msg}
          </p>
        )}
      </CmField>
    </>
  );
};

export default ProfileDepartment;
