# 📘 엘리먼트 렌더링

---

## 4.1 엘리먼트(Element)란?

- **리액트 엘리먼트**는 리액트 앱을 구성하는 가장 작은 빌딩 블록이다.
- 엘리먼트는 **DOM 엘리먼트의 가상 표현(Virtual DOM)** 이다.
- 사용자에게 보여지는 실제 UI를 설명하는 자바스크립트 객체이다.

### 📌 JSX 엘리먼트 예시

```jsx
const element = <button>Click Me</button>;

createElement() 함수 구조

React.createElement(
  type,       // HTML 태그명 또는 리액트 컴포넌트
  props,      // 엘리먼트의 속성
  ...children // 자식 엘리먼트들
)
```
###📌 엘리먼트의 특징: 불변성 (Immutability)
한 번 생성된 리액트 엘리먼트는 변경 불가능

엘리먼트를 업데이트할 때는 새로운 엘리먼트를 생성해서 기존 것을 교체함

React는 변경된 부분만 비교(diffing)하여 최소한의 DOM 업데이트를 수행함

---

##4.2 엘리먼트 렌더링하기

렌더링이란?
JSX로 만든 엘리먼트를 실제 DOM에 출력하는 작업

root DOM node 내부에 렌더링됨
