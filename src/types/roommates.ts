export interface RoommateInfo {
  cleanliness: number;
  createdAt?: string;
  dormitory: string;
  roomType: string;
  roommateId?: number;
  indoorEating: boolean;
  kakaoOpenLink: string;
  matchingStatus?: string;
  message: string;
  noise: string;
  sleepHabit: string;
  sleepPattern: string;
  smoking: boolean;
  sociability: number;
  userId?: string;
  isLiked: boolean;
}

export interface RoommateUserInfo {
  id: string;
  department: string;
  gender: string;
  mbti: string;
  nickname: string;
  studentId: string;
}

export interface RoommateCardData extends RoommateInfo {
  users: RoommateUserInfo;
}

export interface RoommateListProps {
  page: number;
  searchParams: { [key: string]: string | undefined };
  roommates: RoommateCardData[];
  total: number;
}

type RangeValue = string | null;

interface RangeFilter {
  sociabilityMin?: RangeValue;
  sociabilityMax?: RangeValue;
  cleanlinessMin?: RangeValue;
  cleanlinessMax?: RangeValue;
}

export interface RoommateFilterProps extends RangeFilter {
  page?: number;
  pageSize?: number;
  dormitory?: string | null;
  gender?: string | null;
  mbti?: string | null;
  noise?: string | null;
  roomType?: string | null;
  smoking?: string | null;
  indoorEating?: string | null;
  sleepHabit?: string | null;
  sleepPattern?: string | null;
  matchingStatus?: string | null;
  sociabilityRange?: { min: string | null; max: string | null } | null;
  cleanlinessRange?: { min: string | null; max: string | null } | null;
}

export interface RoommateFilterState {
  matchingStatus: boolean;
  dormitory: string;
  gender: string;
  mbti: string;
  noise: string;
  roomType: string;
  smoking: boolean;
  indoorEating: boolean;
  sleepHabit: boolean;
  sleepPattern: string;
  sociabilityRange: { min: number; max: number };
  cleanlinessRange: { min: number; max: number };
}
