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
 -  declaration.d.ts 파일을 만든다
<pre>
$ touch declaration.d.ts
</pre>

 - css에 대한 설정을 추가한다
 <pre>
 declare module '*.css'
 declare module '*.scss' {
     const content: { [className: string]: string };
     export default content;
 }
 </pre>