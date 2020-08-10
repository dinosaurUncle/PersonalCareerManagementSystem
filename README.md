# PersonalCareerManagementSystem
this project is Personal Career Management System, I make this project nodejs(react, next.js) 


## 프로젝트 설치
yarn create next-app

## typescript 설정 추가
<pre>
# tsconfig.json 파일(typescript 설정파일) 추가
$ touch tsconfig.json

# typescript 설정 추가
$ yarn add --dev typescript @types/react @types/react-dom @types/node
</pre>

## css 적용하기
 declaration.d.ts 파일을 만든다
 ```
 $ touch declaration.d.ts
 ``` 
<br>
 
 css에 대한 설정을 추가한다
 ```
declare module '*.css'
 declare module '*.scss' {
     const content: { [className: string]: string };
     export default content;
 }
```
 
 ## material-ui 세팅하기
 material-ui 설치

 ```
$ yarn add @material-ui/core
```
<br>

폰트 & 폰트 아이 세팅
최상단 화면의 HTML 안에 아래와 같은 link tag를 넣는다
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

SVG Icons 설치
```
$ yarn add @material-ui/icons
```

typescript 용 style 처리를 위한 확장용 lib
```
yarn add @material-ui/core/styles
```

##bootstrap 추가

```
$ yarn add react-bootstrap bootstrap
$ yarn add @types/react-bootstrap @types/bootstrap
```