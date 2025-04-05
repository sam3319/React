# 📘 JSX 소개

## 3.1 JSX란?

- **JSX(JavaScript XML)** 는 자바스크립트의 확장 문법
- **JavaScript + HTML/XML** 이 결합된 형태
- HTML 같은 문법을 자바스크립트 코드 안에서 작성 가능

```jsx
// 가장 간단한 JSX 코드 예제
const element = <h1>Hello, world!</h1>;
```

JSX의 역할
JSX는 내부적으로 React.createElement() 함수로 변환됨

브라우저는 JSX를 직접 이해하지 못하기 때문에 바벨(Babel) 등을 사용해 변환해야 함

```// JSX 사용
const element = <h1>Hello, world!</h1>

```// 변환된 JS (JSX 미사용)
const element = React.createElement("h1", null, "Hello, world!")
