import Cmfield from '../common/cm-field';
import CmMbti from '../common/cm-mbti';
import { SignUpFieldProps } from './signup-type';

const SignUpMbti = ({ value, onChange }: SignUpFieldProps) => {
  return (
    <Cmfield label="MBTI">
      <CmMbti value={value} onChange={onChange} />
    </Cmfield>
  );
};

export default SignUpMbti;
