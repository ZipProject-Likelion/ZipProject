# ZipProject

### Git 명령어 정리
- 특정 branch clone 받기 :

  git clone -b {branchname} --single-branch https://github.com/ZipProject-Likelion/ZipProject.git
  
- base.html 로 navar를 모으면서 일부 style이 깨짐. 해당 부분 수정 필요하니 참고하세용

### 폴더 구조 정리

- backend 폴더 : django project localhost:8000
- frontend 폴더 : react project localhost:3000

### 깃 branch 규칙

- 1. git branch는 기능별로 나눠서 (ex. backend-login, frontend-home)
- 2. commit 메시지는 `frontend-추가하거나 바뀐 기능`
