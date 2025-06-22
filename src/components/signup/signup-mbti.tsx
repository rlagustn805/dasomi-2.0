import CmField from '../common/cm-field';
import CmMbti from '../common/cm-mbti';
import { SignUpFieldProps } from '@/types/sign-up';

const SignUpMbti = ({ value, onChange }: SignUpFieldProps) => {
  return (
    <CmField label="MBTI">
      <CmMbti value={value} onChange={onChange} />
    </CmField>
  );
};

export default SignUpMbti;
