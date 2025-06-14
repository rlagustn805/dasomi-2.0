import { TablesInsert } from '@/types/supabase';

export type SignUpForm = Pick<
  TablesInsert<'users'>,
  'nickname' | 'department' | 'gender' | 'student_id' | 'mbti'
>;

export interface SignUpFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export interface SignUpNicknameProps extends SignUpFieldProps {
  isNicknameAvailable: boolean;
  handleIsNicknameAvailable: (value: boolean) => void;
}
