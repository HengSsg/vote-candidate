|Method|Endpoint|Desc|성공시 응답|
|------|--------|-----|---|
|GET   |/vote  | 사용자가 전체 투표 목록을 조회|200

```
응답 200
[{   
    v_id: 7,
    title: 미스터트롯
}
{
    v_id: 3,
    title: 슈퍼스타K
}]
```

|Method|Endpoint|Desc|성공시 응답|
|------|--------|-----|---|
|GET   |/vote/:v_id  | 사용자가 특정 투표내용을 조회|200

```
응답 200
{
    v_id: 3,
    title: 슈퍼스타K
    candidate_list:[
{   
    c_name : 이희성
},{
    c_name: 박형석
   },{
    c_name : 주형우
      }, {
    c_name : 이호용
          }
]}
```

|Method|Endpoint|Desc|성공시 응답|
|------|--------|-----|---|
|GET   |/candidate  | 관리자가 모든 후보자 정보를 조회|200

```
응답 200
[{
c_name: 임영웅
image: {임영웅의 웃는 모습}
desc: 이문세의 휘파람으로 이별의 슬픔을 노래하였다.
}]
```

|Method|Endpoint|Desc|성공시 응답|
|------|--------|-----|---|
|GET   |/candidate/:c_id  | 사용자가 특정 투표의 특정 후보자 정보를 조회|200

```
응답 200
{
c_name : 이호용
image : 이미지
desc : 설명
}
```
|Method|Endpoint|Desc|성공시 응답|
|------|--------|-----|---|
|POST   |/vote | 관리자가 새로운 투표를 생성|200


```
요청 
{
title : 위대한 탄생
candidate_list:[
{   
    c_name : 이희성
},{
    c_name : 박형석
   },{
    c_name : 주형우
      },{
    c_name : 이호용
         }
]
}

응답 201 created
{
v_id : 4
}
```
|Method|Endpoint|Desc|성공시 응답|
|------|--------|-----|---|
|POST   |/candidate | 관리자가 특정 투표의 특정 후보자 정보를 추가|200

```
요청
{
c_name : 임영웅
v_id : 3
image : 이미지
desc : 설명
}


응답 201 created
c_id : 5
```

|Method|Endpoint|Desc|성공시 응답|
|------|--------|-----|---|
|PUT   |/candidate/:c_id | 사용자가 특정 투표의 특정 후보를 투표함|200

```
req
{
      v_id: 3,
      candidate_list: 
{
      c_id : 5
      c_name: 임영웅
      count : 1
}
}
res 200
{c_name: 임영웅}
```
|Method|Endpoint|Desc|성공시 응답|
|------|--------|-----|---|
|PUT   |/vote/:v_id | 관리자가 특정 투표의 내용을 수정|200
```
req
{
v_id : 3
title : 미스터트롯
}
res 200
{message : 수정완료}
```
|Method|Endpoint|Desc|성공시 응답|
|------|--------|-----|---|
|DELETE   |/vote/:v_id | 관리자가 특정 투표를 삭제|200
```
res 200
{
  v_id: {투표아이디},
  title: 미스터트롯
}
```

|Method|Endpoint|Desc|성공시 응답|
|------|--------|-----|---|
|DELETE   |/candidate/:c_id | 관리자가 특정 후보자의 정보를 삭제|200
```
res 200
{
 c_id: {후보자 아이디},
 c_name: 임영웅
}
```