[Vercel 업로드 배포 - Git 없이]

1) Vercel 로그인 → Add New → Project
2) Deploy without Git(또는 Upload) 선택
3) 이 ZIP을 풀고, 폴더(안의 파일들) 전체를 업로드

구성
- index.html : 앱 화면
- api/send-sms.js : 서버(API) - 카페24 문자서버로 프록시

테스트
- 배포 주소 접속 후 '등원 문자 보내기' 실행

주의(보안)
- 이 버전은 누구나 API를 호출할 수 있습니다.
  원하면 비밀키(토큰)로 막는 버전도 만들어드릴게요.
