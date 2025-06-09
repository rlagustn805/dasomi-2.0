interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SignUpGender = ({ value, onChange }: Props) => {
  return (
    <div className="flex gap-4 text-xs font-semibold">
      <div className="flex-1">
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          className="peer hidden"
          checked={value === 'male'}
          onChange={() => onChange('male')}
        />
        <label
          htmlFor="male"
          className="block cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-center peer-checked:bg-green-600 peer-checked:text-white">
          남자
        </label>
      </div>
      <div className="flex-1">
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          className="peer hidden"
          checked={value === 'female'}
          onChange={() => onChange('female')}
        />
        <label
          htmlFor="female"
          className="block cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-center peer-checked:bg-green-600 peer-checked:text-white">
          여자
        </label>
      </div>
    </div>
  );
};

export default SignUpGender;
