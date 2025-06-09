import CmFilterField from '../common/cm-filter-field';
import CmMbti from '../common/cm-mbti';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SignUpMbti = ({ value, onChange }: Props) => {
  return (
    <CmFilterField label="MBTI">
      <CmMbti value={value} onChange={onChange} />
    </CmFilterField>
  );
};

export default SignUpMbti;
