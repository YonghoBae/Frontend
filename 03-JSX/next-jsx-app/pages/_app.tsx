//전역 css파일 참조하여 리액트앱 전체 컴포넌트에서 행 스타일 사용가능
import "@/styles/globals.css";

//App 최상위 컴포넌트에 전달되는 파라메터의 타입
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
