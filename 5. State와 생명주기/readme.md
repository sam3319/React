# 📘 State와 생명주기

## 🧩 SPA (Single Page Application)

- 하나의 HTML 페이지에서 동적으로 콘텐츠를 바꾸며 화면을 구성
- 페이지 전체를 새로고침하지 않고 필요한 부분만 업데이트

---

## 6.1 State란?

- **State**는 리액트 컴포넌트의 **변경 가능한 데이터(상태)** 를 의미함
- State가 변경되면 해당 컴포넌트는 **자동으로 리렌더링**된다
- State는 렌더링이나 데이터 흐름에 **필요한 값만 포함**해야 한다

### 🔹 특징

- 자바스크립트 객체 형태로 존재
- 클래스 컴포넌트에서는 생성자에서 정의
- 함수 컴포넌트에서는 **useState 훅** 사용
- 직접 변경 불가 → 반드시 `setState()` 또는 `set함수()`로 변경

---

### ✅ 클래스 컴포넌트에서의 state 정의

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
```

### ✅ 함수 컴포넌트에서의 state 정의 (useState 훅)

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```
