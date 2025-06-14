import CmFilterField from '../common/cm-filter-field';
import CmMbti from '../common/cm-mbti';
import { SignUpFieldProps } from './signup-type';

const SignUpMbti = ({ value, onChange }: SignUpFieldProps) => {
  return (
    <CmFilterField label="MBTI">
      <CmMbti value={value} onChange={onChange} />
    </CmFilterField>
  );
};

export default SignUpMbti;
