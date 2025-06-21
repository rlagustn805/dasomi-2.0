export interface RoomMateProfileType {
  id?: number;
  user_id?: string;
  dormitory: string;
  room_type: string;
  sociability: number;
  cleanliness: number;
  smoking: boolean;
  indoor_eating: boolean;
  sleep_pattern: string;
  sleep_habit: string | boolean;
  noise: string;
  kakao_open_link: string;
  message: string;
  created_at?: string;
  matching_status?: string | boolean;
}

export interface RoomMateUserInfo {
  department: string;
  gender: string;
  mbti: string;
  nickname: string;
  student_id: string;
}

export interface RoomMateItem extends RoomMateProfileType {
  users: RoomMateUserInfo;
}

export interface RoomMateListType {
  page: number;
  total: number;
  searchParams: { [key: string]: string | undefined };
  data: RoomMateItem[];
}

export interface RoomMateProfileFilter extends Partial<RoomMateProfileType> {
  gender?: string;
  mbti?: string;
  sociabilityRange?: {
    min: number;
    max: number;
  };
  cleanlinessRange?: {
    min: number;
    max: number;
  };
}

export interface RoommateFilterProps {
  filters: {
    dormitory: string | null;
    gender: string | null;
    mbti: string | null;
    roomType: string | null;
    smoking: string | null;
    indoorEating: string | null;
    sleepHabit: string | null;
    sleepPattern: string | null;
    matchingStatus: string | null;
    sociabilityRange: {
      min: string;
      max: string;
    } | null;
    cleanlinessRange: {
      min: string;
      max: string;
    } | null;
  };
}
