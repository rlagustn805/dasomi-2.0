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
  sleep_habit: string;
  noise: string;
  kakao_open_link: string;
  message: string;
  created_at?: string;
}
