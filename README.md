**2021.7.4 작성한 것들 다듬은 파일**

< clone 시 주의할 점 >
- clone 코드 : git clone -b sumi --single-branch https://github.com/LikeZipper/ZipProject.git
- 그냥 clone 받으면 myproject 폴더가 비어있으므로 압축된 myproject.zip 파일 사용하기
- pip3 install django
- pip3 install pillow
- pip3 install bootstrap4
(windows는 pip3 대신 pip 사용)

< runserver 시 주의할 점 >
- 노트북마다 화면 비율이 달라 깨져 보일 수 있음. 화면 비율을 조정하는 것으로 해결할 수 있을지도(80% 정도로 조정해보기!)

< 아직 구현하지 못한 부분 >
- 큐레이션(컬렉션) 세부 페이지 : product 페이지 똑같이 사용하되 검색창 같은것만 없애면 될듯
- Product 세부 페이지 : 큐레이션(컬렉션)에 추가하기 버튼 - 만들긴 했는데 작동은 안함
- 마이페이지랑 큐레이션 페이지 이미지 다양하게 넣어서 보기좋게 하기

-------------( 아래는 사소한 부분들 )----------------
- Product 세부 페이지 : 상단바 추가해야 됨
- 쉐어하우스 둘러보기 페이지 : 상단바 업데이트 필요
- ZIP 둘러보기 페이지 : 상단바 업데이트 필요
- 마이 페이지 : 보관함 미관상 예쁘게 다듬기
- 쉐어하우스/ZIP 둘러보기 페이지 : 썸네일 이미지, 제목, 해시태그 이 세가지 내용이 보일 수 있게 미리보기 수정필요

+) 쉐어하우스 : 좋아요 또는 내 컬렉션에 추가 기능이 있어야 product 세부 페이지에서 큐레이션(컬렉션)에 추가하기 눌렀을 때 리스트에 나올 수 있을 듯 하다
