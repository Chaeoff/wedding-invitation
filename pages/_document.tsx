import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect, useState } from "react";

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
    </Html>
  );
}
