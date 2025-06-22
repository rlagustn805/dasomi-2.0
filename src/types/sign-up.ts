export interface SignUpForm {
  nickname: string;
  department: string;
  gender: string;
  studentId: string;
  mbti: string;
}

export interface SignUpFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export interface SignUpNicknameFieldProps extends SignUpFieldProps {
  isNicknameAvailable: boolean;
  handleIsNicknameAvailable: (value: boolean) => void;
}
