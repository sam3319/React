# ⚛️ React 개요

> 페이스북(메타)이 개발한 사용자 인터페이스(UI) 라이브러리  
> "UI = 함수(props) → 엘리먼트" 로 선언적으로 컴포넌트를 구성하는 방식

---

## 📌 React란?

- **React**는 JavaScript 기반의 **UI 라이브러리**이다.
- 주로 **단일 페이지 애플리케이션(SPA)** 을 만들 때 사용된다.
- 컴포넌트를 통해 **재사용 가능한 UI**를 구성한다.
- **Virtual DOM** 기반으로 성능이 우수하다.

---

## 🧱 주요 특징

| 특징 | 설명 |
|------|------|
| 컴포넌트 기반 | UI를 독립적이고 재사용 가능한 컴포넌트 단위로 구성 |
| 선언형 프로그래밍 | 복잡한 UI 상태를 단순하게 표현 |
| Virtual DOM | DOM을 직접 조작하지 않고, 가상 DOM을 사용해 효율적으로 업데이트 |
| 양방향 데이터 흐름 | 단방향 데이터 흐름으로 구조가 예측 가능 |
| JSX | JavaScript + HTML 문법의 확장 (JSX)를 사용 |

---

## 🔧 핵심 개념

- **JSX**: HTML과 유사한 문법을 사용하여 React 요소를 작성
- **컴포넌트(Component)**: 함수 또는 클래스 기반 UI 블록
- **Props**: 컴포넌트 간 데이터 전달 수단 (읽기 전용)
- **State**: 컴포넌트의 내부 데이터 (변경 가능, UI 반영됨)
- **Lifecycle**: 컴포넌트의 생성/갱신/제거 과정에서 실행되는 훅 또는 메서드

---

## ⚙️ 기본 예제

```jsx
function Welcome(props) {
  return <h1>안녕하세요, {props.name}!</h1>;
}

const element = <Welcome name="리액트" />;
ReactDOM.render(element, document.getElementById('root'));
```

---

## 📈 장점
-빠른 렌더링 (Virtual DOM)

-높은 재사용성 (컴포넌트 구조)

-대규모 앱에서도 구조적인 관리 가능

-활발한 커뮤니티와 생태계

---

## 📉 단점
-JSX 문법에 익숙해져야 함

-상태 관리가 복잡해질 수 있음 (Redux, Context API 필요)

-SEO에 약할 수 있음 (서버 사이드 렌더링으로 보완 가능)

