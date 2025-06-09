import CmDepartment from '../common/cm-department';
import CmFilterField from '../common/cm-filter-field';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SignUpDepartment = ({ value, onChange }: Props) => {
  return (
    <div className="w-full">
      <CmFilterField label="학과">
        <CmDepartment value={value} onChange={onChange} />
      </CmFilterField>
    </div>
  );
};

export default SignUpDepartment;
