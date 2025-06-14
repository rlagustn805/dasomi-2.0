import CmDepartment from '../common/cm-department';
import CmFilterField from '../common/cm-filter-field';
import { SignUpFieldProps } from './signup-type';

const SignUpDepartment = ({ value, onChange }: SignUpFieldProps) => {
  return (
    <div className="w-full">
      <CmFilterField label="학과">
        <CmDepartment value={value} onChange={onChange} />
      </CmFilterField>
    </div>
  );
};

export default SignUpDepartment;
