import CmDepartment from '../common/cm-department';
import Cmfield from '../common/cm-field';
import { SignUpFieldProps } from './signup-type';

const SignUpDepartment = ({ value, onChange }: SignUpFieldProps) => {
  return (
    <div className="w-full">
      <Cmfield label="학과">
        <CmDepartment value={value} onChange={onChange} />
      </Cmfield>
    </div>
  );
};

export default SignUpDepartment;
