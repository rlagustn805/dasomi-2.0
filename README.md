<img src="https://github.com/user-attachments/assets/65a6602f-027e-4063-b5cb-5783cacf4389" alt="배너" width="30%"/>
</a>
<br/>
<br/>

<br/>
<br/>

# 0. 배포 사이트 
[서비스 링크](https://dasomi-roommate.vercel.app/)
<br/><br/>
(ctrl + 좌클릭시 새 창으로 이동이 됩니다.)


<br/>
<br/>

# 1. Project Overview (프로젝트 개요)
- 프로젝트 이름: 다솜이 2.0
- 프로젝트 설명: 대학교 기숙사 룸메이트 매칭 서비스 개선 버전

<br/>
<br/>

# 2. Project Purpose (프로젝트 목적)
기존 룸메이트 매칭 서비스의 복잡한 회원가입 절차와 불편한 UI/UX를 개선하고, <br/>
세분화된 맞춤형 필터 기능을 통해 사용자가 최적의 룸메이트를 찾을 수 있도록 고도화했습니다.<br/>

<img width="40%" alt="kakao_screenshot1752042616408" src="https://github.com/user-attachments/assets/138e0d4c-f6ff-4e15-8856-23d56f546b36" />
<img width="40%" alt="kakao_screenshot1752042626824" src="https://github.com/user-attachments/assets/8bbc2eda-95f8-499a-9f8d-c69a068aaa78" />


<br/>
<br/>

<br/>
<br/>


# 3. Key Features (주요 기능)

- **로그인**:
  - Oauth를 통해 카카오 로그인으로 회원가입을 간소화 하였습니다. <br/><br/>
  <img width="40%" alt="kakao_screenshot1752042626824" src="https://github.com/user-attachments/assets/dd68e1ff-8a77-4f2b-8382-f4444684a28c" />
  
<br/>
<br/>
 

- **메뉴 목록**:
  - 로그인 후 메뉴 리스트를 볼 수 있습니다. <br/><br/>
  <img width="278" alt="image" src="https://github.com/user-attachments/assets/12cb1029-f8c3-441d-bd63-d69b9cff6aad" />

<br/><br/>
 
- **내 정보 관리**:
  - 학과 변경, 닉네임 변경 등 내 정보를 수정하거나 탈퇴할 수 있습니다. <br/><br/>
 <img width="488" alt="h3" src="https://github.com/user-attachments/assets/d482b884-f674-41d3-b949-c93ea6da5987" />

<br/><br/>

- **룸메이트 등록하기**:
  - 룸메이트를 구하기 위해 등록하기 버튼으로 나의 룸메이트 정보를 등록할 수 있습니다. <br/><br/>

  <img width="40%" alt="h6" src="https://github.com/user-attachments/assets/be587917-9c23-41fb-98d3-ec50f2488480" /> <br/><br/>

  - 룸메이트 매칭 상태를 변경할 수 있습니다. (매칭 중, 매칭 완료는 매칭 신청을 할 수 없게 구현하였습니다.) <br/><br/>
  <img width="40%" alt="h7" src="https://github.com/user-attachments/assets/72111f28-cb9b-4e50-8404-0add0f29a340" />

<br/><br/>

- **룸메이트 찾기**:
  - 각 관을 구분하여 등록된 룸메이트 정보들을 볼 수 있습니다.
  - 필터를 이전보다 더 세분화하여 원하는 정보를 더욱 쉽게 찾을 수 있도록 하였습니다. <br/><br/>

  <img width="40%" alt="h8" src="https://github.com/user-attachments/assets/ae599428-cc22-4bc7-99d8-9396c0b7b2f5" /> <br/><br/>
  <img width="40%" alt="h9" src="https://github.com/user-attachments/assets/501b59f7-2f14-452a-be14-45dce3233523" /> <br/><br/>
<br/><br/>

- **문의하기**:
  - 실서비스를 운영하니 문의사항이 올 수 있습니다. 실시간으로 문의를 받기 위해 오픈채팅 링크로 이동하는 버튼을 만들었습니다. <br/><br/>
  <img width="40%" alt="image" src="https://github.com/user-attachments/assets/395eba39-3946-479f-85ee-d943d21b5000" /> <br/><br/>

<br/><br/>

- **관리자 페이지**:
  - 가입자, 매칭 상태를 실시간으로 조회할 수 있습니다.   <br/>
  <img width="40%" alt="image" src="https://github.com/user-attachments/assets/064b1c90-f8d8-4ef8-bf8e-cf34e0bbc2a1" /> <br/><br/>


<br/>
<br/>

# 4. Improvements (개선사항)
  1. 이미지 최적화 방법 중 압축된 포맷 확장자 webp를 사용하였습니다. <br/>
     더나은 최적화 방법이 있을지 확인 중 webp보다 압축률이 좋은 확장자 avif를 알게 되면서 적용하였습니다.  <br/><br/>
   <img width="40%" alt="image" src="https://github.com/user-attachments/assets/c200444c-f9b4-4ba5-874a-1514dcdac8e0" /> <br/><br/>


   <br/><br/>
   
  2. PWA 적용 <br/>
  <img src="https://github.com/user-attachments/assets/798899c8-0e9d-43b7-9f67-2ee89548563f" width="40%"/> <br/><br/>
  모바일로 이용하는 유저가 많을 것이라 예상하여 보다 나은 사용자 경험을 위해 적용하였습니다. <br/>
  next-pwa 라이브러리를 이용하여 구축하였습니다. <br/>
<br/><br/>
  3. 렌더링 최적화 <br/>
  useCallback, React.memo를 이용하여 불필요한 렌더링을 최소화 하였습니다.
  <img src="https://github.com/user-attachments/assets/3990bce1-0048-49bf-abf6-4ed793bc873c" width="40%"/> 
  <img src="https://github.com/user-attachments/assets/1a3e9c67-eeae-43d8-9771-b8b66eb86a3b" width="40%"/> 

<br/><br/>
  4. 로그인 유지 깜빡임 현상<br/>
  기존 헤더는 SSR 형태로 로그인 유지를 하였습니다. 모든 페이지에 헤더가 필요하다보니 SSG가 아닌 SSR로 빌드되는 현상이 생겼습니다. <br/>
  이를 해결하기 위해 헤더를 클라이언트로 바꾸고 깜빡임 현상이 있는걸 발견하여 실서비스 사이트를 몇 군데 둘러보고 사용자가 불편함을 느끼지 않게 프로필 메뉴바를 만들어 로그인 상태를 확인할 수 있게 하였습니다. <br/>
  <img src="https://github.com/user-attachments/assets/0741a0a0-2df6-492d-89f7-8f190cd921f3" width="40%"/> 
  <img width="241" alt="스크린샷 2025-07-01 145721" src="https://github.com/user-attachments/assets/62b06c39-8f1e-40d1-8356-c0e2013cf579" />
<br/><br/>
  5. suspense를 활용한 로딩 스피너, 스켈레톤 UI 적용 <br/>
  사용자의 이탈을 막고, 어떤 것들이 렌더링 될지 미리 알려주는 효과를 주기 위해 적용하였습니다. <br/>
  <img width="280" alt="image" src="https://github.com/user-attachments/assets/5b605525-ab89-4d14-8350-cc93f2b3d296" /> <br/><br/>
  <img width="280" alt="image" src="https://github.com/user-attachments/assets/f94633b1-1fd0-4bb9-8947-1207b8807a21" /> <br/><br/>
<br/><br/>
  6. 페이지 렌더링 시 이미지 깜빡임 현상 (+ LCP 개선) <br/>
  초기 진입 시 또는 새로고침 시에 이미지 로딩 시에 좀 더 매끄러운 사용자 경험을 위해 blur 효과 적용하였습니다. <br/>
  <img width="282" alt="image" src="https://github.com/user-attachments/assets/29465132-9eff-4cf9-b410-bdd2b9f6087f" /> <br/>
  
<br/>  
<br/>


# 6. Technology Stack (기술 스택)

| 기술 | 아이콘 |
|------------------|------------------|
| HTML5 | <img src="https://github.com/user-attachments/assets/2e122e74-a28b-4ce7-aff6-382959216d31" alt="HTML5" width="100"> |
| Tailwind CSS | <img src="https://github.com/user-attachments/assets/650e9e6c-783d-474d-aadb-170ccbb57b3d" alt="Tailwind CSS" width="100"> |
| TypeScript | <img src="https://github.com/user-attachments/assets/ccf7fc4d-c957-47f0-8f54-46a610e93087" alt="TypeScript" width="100"> |
| Next.js | <img src="https://github.com/user-attachments/assets/d9239121-0db8-462d-8069-ad5456339099" alt="Next.js" width="100"> |
| Supabase | <img src="https://github.com/user-attachments/assets/c810e830-58f5-4e1c-b7b6-3e2506b06f11" alt="Supabase" width="100"> |



<br/>
