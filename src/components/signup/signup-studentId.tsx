import Cmfield from '../common/cm-field';
import CmStudentId from '../common/cm-student-id';
import { SignUpFieldProps } from './signup-type';

const SignUpStudentId = ({ value, onChange }: SignUpFieldProps) => {
  return (
    <Cmfield label="학번">
      <CmStudentId value={value} onChange={onChange} />
    </Cmfield>
  );
};

export default SignUpStudentId;
