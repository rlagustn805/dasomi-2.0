import CmFilterField from '../common/cm-filter-field';
import CmStudentId from '../common/cm-student-id';
import { SignUpFieldProps } from './signup-type';

const SignUpStudentId = ({ value, onChange }: SignUpFieldProps) => {
  return (
    <CmFilterField label="학번">
      <CmStudentId value={value} onChange={onChange} />
    </CmFilterField>
  );
};

export default SignUpStudentId;
