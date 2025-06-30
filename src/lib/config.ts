const dev = process.env.NODE_ENV !== 'production';

export const API_URL = dev
  ? process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'
  : ''; // ← prod에선 상대경로로 처리
