import { memo } from 'react';
import CmField from '../common/cm-field';
import CmStudentId from '../common/cm-student-id';
import { SignUpFieldProps } from '@/types/sign-up';

const SignUpStudentId = ({ value, onChange }: SignUpFieldProps) => {
  return (
    <CmField label="학번">
      <CmStudentId value={value} onChange={onChange} />
    </CmField>
  );
};

export default memo(SignUpStudentId);
