import { memo } from 'react';
import CmDepartment from '../common/cm-department';
import CmField from '../common/cm-field';
import { SignUpFieldProps } from '@/types/sign-up';

const SignUpDepartment = ({ value, onChange }: SignUpFieldProps) => {
  return (
    <div className="w-full">
      <CmField label="학과">
        <CmDepartment value={value} onChange={onChange} />
      </CmField>
    </div>
  );
};

export default memo(SignUpDepartment);
