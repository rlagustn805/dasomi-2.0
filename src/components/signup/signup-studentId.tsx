import CmFilterField from '../common/cm-filter-field';
import CmStudentId from '../common/cm-student-id';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SignUpStudentId = ({ value, onChange }: Props) => {
  return (
    <CmFilterField label="학번">
      <CmStudentId value={value} onChange={onChange} />
    </CmFilterField>
  );
};

export default SignUpStudentId;
