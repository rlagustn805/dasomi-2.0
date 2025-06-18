import { TablesInsert } from '@/types/supabase';

// null | undefined 제거하는 유틸
type NonNullableFields<T> = {
  [K in keyof T]-?: NonNullable<T[K]>;
};

// RoommateProfile 타입: nullable 제거 + message는 optional로 유지
export type RoommateProfile = NonNullableFields<
  Omit<
    TablesInsert<'roommates'>,
    'user_id' | 'id' | 'created_at' | 'matching_status'
  >
> & {
  message?: string;
};

export type RoommateProfileWithId = RoommateProfile & {
  id: number;
  user_id: string;
};
