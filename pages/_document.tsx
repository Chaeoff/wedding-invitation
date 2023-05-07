import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

declare global {
  interface Window {
    kakao: any;
  }
}
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cf35dcd8c120a39595c821b324c14f88&&libraries=clusterer" />
    </Html>
  );
}
