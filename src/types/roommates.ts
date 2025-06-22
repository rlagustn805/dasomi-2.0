export interface RoomMateProfileType {
  id: number;
  user_id: string;
  dormitory: string;
  room_type: string;
  sociability: number;
  cleanliness: number;
  smoking: boolean;
  indoor_eating: boolean;
  sleep_pattern: string;
  sleep_habit: string;
  noise: string;
  kakao_open_link: string;
  message: string;
  matching_status: 'available' | 'matching' | 'matched';
  created_at: string;
}

export interface RoomMateUserInfo {
  nickname: string;
  mbti: string;
  department: string;
  gender: string;
  student_id: string;
}

export interface RoomMateWithUser extends RoomMateProfileType {
  users: RoomMateUserInfo;
}

export interface RoomMateFilterParams {
  page?: number;
  pageSize?: number;
  dormitory?: string;
  gender?: string;
  mbti?: string;
  room_type?: string;
  smoking?: boolean;
  indoor_eating?: boolean;
  sleep_habit?: boolean;
  sleep_pattern?: string;
  matching_status?: boolean;
  sociabilityMin?: number;
  sociabilityMax?: number;
  cleanlinessMin?: number;
  cleanlinessMax?: number;
}

export interface RoomMateProfileInsert {
  dormitory: string;
  room_type: string;
  sociability: number;
  cleanliness: number;
  smoking: boolean;
  indoor_eating: boolean;
  sleep_pattern: string;
  sleep_habit: string;
  noise: string;
  kakao_open_link: string;
  message: string;
}
