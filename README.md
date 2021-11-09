# ZipProject

### Git 명령어 정리
- 특정 branch clone 받기 :

> `git clone -b {branchname} --single-branch https://github.com/ZipProject-Likelion/ZipProject.git`
  
### 처음 Clone 받았을 때 해줘야할 것
~~> mysql 서버 접속~~

~~- `mysql.server start`~~

~~- `mysql -uroot -p`~~

> `cd config` 에서 settings.py.secret 파일 reveal 하기
- `python manage.py makemigrations`
- `python manage.py migrate`

### 폴더 구조 정리

- backend 폴더 : django project localhost:8000
- frontend 폴더 : react project localhost:3000

### 깃 branch 규칙

- 1. git branch는 기능별로 나눠서 (ex. backend-login, frontend-home)
- 2. commit 메시지는 `frontend-추가하거나 바뀐 기능`


### frontend 시작
- `cd frontend`
- `npm i` //dependencies 설치
- `npm start`

### backend 시작
- `cd backend`
- `source myvenv/bin/activate`
- `pip install -r requirements.txt` //dependencies 설치
- `python manage.py runserver`
