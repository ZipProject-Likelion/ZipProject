# ZipProject

### Git 명령어 정리
- 특정 branch clone 받기 :

  git clone -b {branchname} --single-branch https://github.com/ZipProject-Likelion/ZipProject.git
 

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
- `python manage.py makemigrations`
- `python manage.py migrate`
- `python manage.py createsuperuser`