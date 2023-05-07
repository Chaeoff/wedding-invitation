import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar } from "../components/Calendar";
import { ContactsModal } from "../components/ContactsModal";
import { Layout } from "../components/Layout";
import Map from "../components/Map";
import { PhotoGallery } from "../components/PhotoGallery";

// TODO: og image 수정, Dday counter, 간격 수정, 폰트 아이폰 적용

export default function Home() {
  const [openContact, setOpenContact] = useState(false);
  const [openBank1, setOpenBank1] = useState(false);
  const [openBank2, setOpenBank2] = useState(false);

  const cls = (...classname: string[]) => {
    return classname.join(" ");
  };
  return (
    <>
      <Head>
        <title>상운이 예린이 결혼해요~♥</title>
        <meta
          name="description"
          content="7월 1일 토요일, 오후 3시 라루체 4F 루아르홀"
        />
        <meta
          property="og:decription"
          name="description"
          content="7월 1일 토요일, 오후 3시 라루체 4F 루아르홀"
        />
        <meta property="og:title" content="하상운 ♥ 김예린 결혼합니다." />
        <meta
          property="og:image"
          content="https://hapro-yerin-wedding.com/og-image.jpg"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {openContact && <ContactsModal setOpenContact={setOpenContact} />}
        <div className="flex flex-col font-batang h-auto w-full bg-[#d5d7ea] max-w-[430px] border items-center justify-center">
          <div className="MAIN_IMAGE_TITLE relative flex w-full flex-col justify-start gap-y-8 items-center pb-8">
            <div className="absolute border w-[97%] h-[98%] inset-0 m-auto" />
            <Image
              src="/images/main.jpg"
              width={1829}
              height={2560}
              alt="상운 예린 결혼 이미지"
              quality={100}
            />
            <div className="TOP_TEXT flex flex-col items-center justify-center">
              <div className="FIRST_LINE flex justify-between items-center gap-x-12 w-full">
                <span className="text-3xl">하상운</span>
                <div className="flex text-3xl font-semibold flex-col">
                  <span className="border-b-[2px] border-[#49413a] pb-2">
                    07
                  </span>
                  <span className="pt-2">01</span>
                </div>
                <span className="text-3xl">김예린</span>
              </div>
              <div className="SECOND_LINE py-5 gap-y-3 flex flex-col w-full items-center">
                <span>2023년 7월 1일 토요일 오후 3시</span>
                <span className="text-lg">라루체 4F 루아르홀</span>
              </div>
            </div>
          </div>
          <div className="UNTIL_MAP flex flex-col justify-start w-full items-center h-auto py-8">
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-[#7196cb] tracking-widest text-sm">
                INVITATION
              </span>
              <span className="text-[#446ea9] tracking-widest text-xl">
                초대합니다
              </span>
            </div>
            <p className="INTRODUCTION text-center px-4 break-words py-12 leading-8">
              물빛 푸른 여름날에
              <br /> 두 사람이 하나가 되어 새 삶을 시작합니다.
              <br /> 즐겁고 어려움을 함께하는 사랑을 배우며
              <br /> 행복으로 가득 채우겠습니다.
              <br /> 오셔서 축복해 주시면
              <br /> 더없는 기쁨이 되겠습니다.
            </p>
            <div className="CONTACTS flex flex-col items-center justify-center">
              <div className="w-full flex items-end gap-x-2 border-y py-6">
                <div className="flex flex-col justify-between gap-y-2 font-extrabold text-lg">
                  <span>하명수</span>
                  <span>김용현</span>
                </div>
                <div className="flex flex-col justify-between gap-y-2 font-extrabold text-lg">
                  <span> • </span>
                  <span> • </span>
                </div>
                <div className="flex flex-col justify-between gap-y-2  text-lg">
                  <div className="flex">
                    <span className="font-extrabold">강정숙</span>
                    <span className="text-sm self-end pl-2">의</span>
                  </div>
                  <div className="flex">
                    <span className="font-extrabold">김재현</span>
                    <span className="text-sm self-end pl-2">의</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center gap-y-2 text-lg">
                  <div className="flex items-end h-7">
                    <span className="text-sm text-center">아들</span>
                  </div>
                  <div className="flex items-end h-7">
                    <span className="text-sm text-center">딸</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-y-2 font-extrabold text-lg">
                  <span>상운</span>
                  <span>예린</span>
                </div>
              </div>
              <div
                onClick={() => setOpenContact((prev) => !prev)}
                className="CONTACT_BUTTON w-full my-14 py-5 h-8 rounded-full flex items-center cursor-pointer gap-x-2 border-[#7196cb] justify-center border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[14px] h-[14px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="text-zinc-700 font-bold">연락하기</span>
              </div>
            </div>
            <div className="CALENDAR bg-white/30 w-full flex flex-col justify-center items-center py-14">
              <div className="text-2xl">2023.7.1</div>
              <div className="pt-2 pb-4">토요일 오후 3시</div>
              <Calendar />
            </div>
          </div>
          <div className="WHOLE_MAP w-full h-auto flex flex-col py-12 px-4">
            <div className="flex flex-col items-center justify-center space-y-2 py-4">
              <span className="text-[#7196cb] text-sm tracking-widest">
                LOCATION
              </span>
              <span className="text-[#446ea9] tracking-widest text-xl">
                오시는 길
              </span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 py-4">
              <span className="tracking-widest">라루체 4F 루아르홀</span>
              <span className="tracking-wide opacity-70">
                서울 중구 퇴계로18길 46
              </span>
            </div>
            <div className="MAP w-full h-[360px] flex justify-center items-center">
              <Map />
            </div>
            <div className="MAP_LINKS my-4 rounded-md text-sm w-full flex justify-between py-3 bg-[#7196cb]/30">
              <Link
                href="nmap://search?query=%EB%9D%BC%EB%A3%A8%EC%B2%B4%20%EC%9B%A8%EB%94%A9&appname=com.example.myapp"
                target="_blank"
                className="NAVER flex w-[33%] gap-x-1 items-center justify-center"
              >
                <Image
                  src="/images/naver-icon.png"
                  width={24}
                  height={24}
                  alt="네이버 지도 아이콘"
                  className="w-4 h-4 rounded-sm"
                />
                <span>네이버 지도</span>
              </Link>
              <Link
                href="https://map.kakao.com/link/to/8586977"
                target="_blank"
                className="KAKAO flex w-[33%] border-x gap-x-1 items-center justify-center"
              >
                <Image
                  src="/images/kakao-map.ico"
                  width={24}
                  height={24}
                  alt="네이버 지도 아이콘"
                  className="w-4 h-4 rounded-sm"
                />
                카카오 지도
              </Link>
              <Link
                href="tmap://route?goalname=라루체웨딩홀&goalx=126.98445827355191&goaly=37.55911077784374"
                target="_blank"
                className="T_MAP flex w-[33%] gap-x-1 items-center justify-center"
              >
                <Image
                  src="/images/t-map.png"
                  width={24}
                  height={24}
                  alt="네이버 지도 아이콘"
                  className="w-4 h-4 rounded-sm"
                />
                티맵
              </Link>
            </div>
            <div className="ROUTES flex flex-col gap-y-4 w-full border-y py-4 justify-center items-start">
              <div className="flex gap-x-2 items-start">
                <div className="py-1 w-8 ">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColosr"
                    height="1em"
                    width="1em"
                    className="w-5 h-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 01-2-2V7a4 4 0 014-4h10a4 4 0 014 4v11a2 2 0 01-2 2h-1.8zM13 5v6h6V7a2 2 0 00-2-2h-4zm-2 0H7a2 2 0 00-2 2v4h6V5zm8 8H5v5h14v-5zM7.5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                  </svg>
                </div>
                <div className="flex flex-col tracking-tight items-start justify-start">
                  <span className="font-bold">지하철</span>
                  <span className="text-[15px]">
                    4호선 명동역 3번출구 (퍼시픽 호텔 우측길로 60m)
                  </span>
                </div>
              </div>
              <div className="flex gap-x-2 items-start">
                <div className="py-1 w-8 flex justify-start">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-4 h-4 ml-[2px]"
                  >
                    <path d="M256 0c134.4 0 224 35.2 224 80v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H160v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-32c-17.7 0-32-14.3-32-32V256c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32V80c0-44.8 89.6-80 224-80zM96 160v96c0 17.7 14.3 32 32 32h112V128H128c-17.7 0-32 14.3-32 32zm176 128h112c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H272v160zM112 400c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM352 80c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16z" />
                  </svg>
                </div>
                <div className="flex flex-col tracking-tight items-start justify-start">
                  <span className="font-bold">버스</span>
                  <span className="text-[15px]">
                    104, 105, 263, 604, 507, 421, 7011 (명동입구역 하차)
                  </span>
                </div>
              </div>
              <div className="flex gap-x-2 items-start">
                <div className="py-1 w-8 flex justify-start">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-5 h-5"
                  >
                    <path d="M959 413.4L935.3 372a8 8 0 00-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 00-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 00-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 003-10.8zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM220 418l72.7-199.9.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220z" />
                  </svg>
                </div>
                <div className="flex flex-col tracking-tight items-start justify-start">
                  <span className="font-bold">주차</span>
                  <span className="text-[15px]">
                    라루체 전용 주차장 보유 (만차 시 인근의 별도 주차장 지원)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="py-12 flex w-full px-4 flex-col justify-center items-center">
            <div className="w-full flex-col items-center justify-center flex">
              <Image
                src="/images/flower.PNG"
                alt="꽃"
                width={460}
                height={254}
                className="w-20 py-4"
              />
              <span className="text-xl text-[#446ea9] pb-8">
                마음 전하실 곳
              </span>
            </div>
            <div
              className={cls(
                openBank1 ? "h-[267px]" : "h-12",
                "COLLAPSIBLE_1 overflow-hidden transition-all my-4 relative w-full rounded-md"
              )}
            >
              <span
                onClick={() => {
                  setOpenBank1((prev) => !prev);
                }}
                className="w-full cursor-pointer bg-[#7196cb]/30 h-12 text-white flex justify-center items-center"
              >
                신랑측 계좌번호
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={cls(
                  openBank1 ? "rotate-180" : "rotate-0",
                  "w-4 h-4 absolute right-2 transform-all top-4"
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="bg-slate-200 w-full bg-white/ gap-x-3 py-3 border-b border-[#446ea9]/10 h-auto justify-between px-2 flex items-start">
                <span className="text-start">
                  우리은행
                  <br />
                  하상운
                </span>
                <span>1002-157-714605</span>
                <div
                  onClick={() => {
                    navigator.clipboard
                      .writeText("1002-157-714605")
                      .then(() => {
                        alert("계좌가 복사 되었습니다!");
                      });
                  }}
                  className="rounded-md border border-zinc-300 pt-1 flex justify-center items-center px-2 gap-x-1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-3 h-3 mb-1"
                  >
                    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z" />
                  </svg>
                  <span className="text-xs">복사</span>
                </div>
              </div>
              <div className="bg-slate-200 w-full gap-x-3 py-3 border-b border-[#446ea9]/10 h-auto justify-between px-2 flex items-start">
                <span className="text-start">
                  농협은행 <br />
                  하명수
                </span>
                <span>801165-52-005332</span>
                <div
                  onClick={() => {
                    navigator.clipboard
                      .writeText("801165-52-005332")
                      .then(() => {
                        alert("계좌가 복사 되었습니다!");
                      });
                  }}
                  className="rounded-md border border-zinc-300 pt-1 flex justify-center items-center px-2 gap-x-1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-3 h-3 mb-1"
                  >
                    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z" />
                  </svg>
                  <span className="text-xs">복사</span>
                </div>
              </div>
              <div className="bg-slate-200 w-full gap-x-3 py-3 border-b border-[#446ea9]/10 h-auto justify-between px-2 flex items-start">
                <span className="text-start">
                  농협은행 <br />
                  김정숙
                </span>
                <span>801165-52-008972</span>
                <div
                  onClick={() => {
                    navigator.clipboard
                      .writeText("801165-52-008972")
                      .then(() => {
                        alert("계좌가 복사 되었습니다!");
                      });
                  }}
                  className="rounded-md border border-zinc-300 pt-1 flex justify-center items-center px-2 gap-x-1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-3 h-3 mb-1"
                  >
                    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z" />
                  </svg>
                  <span className="text-xs">복사</span>
                </div>
              </div>
            </div>
            <div
              className={cls(
                openBank2 ? "h-[267px]" : "h-12",
                "COLLAPSIBLE_1 overflow-hidden transition-all relative w-full rounded-md"
              )}
            >
              <span
                onClick={() => {
                  setOpenBank2((prev) => !prev);
                }}
                className="w-full text-white cursor-pointer bg-[#7196cb]/30 h-12 flex justify-center items-center"
              >
                신부측 계좌번호
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={cls(
                  openBank2 ? "rotate-180" : "rotate-0",
                  "w-4 h-4 absolute right-2 transform-all top-4"
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="bg-slate-200 w-full gap-x-3 py-3 border-b border-[#446ea9]/10 h-auto justify-between px-2 flex items-start">
                <span className="text-start">
                  신한은행
                  <br />
                  김예린
                </span>
                <span>110-435-430759</span>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText("110-435-430759").then(() => {
                      alert("계좌가 복사 되었습니다!");
                    });
                  }}
                  className="rounded-md border border-zinc-300 pt-1 flex justify-center items-center px-2 gap-x-1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-3 h-3 mb-1"
                  >
                    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z" />
                  </svg>
                  <span className="text-xs">복사</span>
                </div>
              </div>
              <div className="bg-slate-200 w-full gap-x-3 py-3 border-b border-[#446ea9]/10 h-auto justify-between px-2 flex items-start">
                <span className="text-start">
                  신한은행 <br />
                  김용현
                </span>
                <span>611-04-247373</span>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText("611-04-247373").then(() => {
                      alert("계좌가 복사 되었습니다!");
                    });
                  }}
                  className="rounded-md border border-zinc-300 pt-1 flex justify-center items-center px-2 gap-x-1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-3 h-3 mb-1"
                  >
                    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z" />
                  </svg>
                  <span className="text-xs">복사</span>
                </div>
              </div>
              <div className="bg-slate-200 w-full gap-x-3 py-3 border-b border-[#446ea9]/10 h-auto justify-between px-2 flex items-start">
                <span className="text-start">
                  신한은행 <br />
                  김재현
                </span>
                <span>110-259-537689</span>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText("110-259-537689").then(() => {
                      alert("계좌가 복사 되었습니다!");
                    });
                  }}
                  className="rounded-md border border-zinc-300 pt-1 flex justify-center items-center px-2 gap-x-1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-3 h-3 mb-1"
                  >
                    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z" />
                  </svg>
                  <span className="text-xs">복사</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-12 flex flex-col justify-center items-center">
            <span className="text-md pb-2 flex items-center text-[#446ea9]/70">
              축하 화환은 정중히 사양합니다.
            </span>
            <div className="flex justify-center text-[#446ea9]/70">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M3 13a9 9 0 009 9 9 9 0 00-9-9m2.44 2.44c1.91.71 3.41 2.21 4.12 4.12a6.986 6.986 0 01-4.12-4.12M12 22a9 9 0 009-9 9 9 0 00-9 9m2.42-2.43a6.876 6.876 0 014.15-4.15 7.03 7.03 0 01-4.15 4.15M12 14a6 6 0 006-6V3a5.9 5.9 0 00-2.16.39c-.55.23-1.04.57-1.45 1L12 2 9.61 4.39c-.41-.43-.9-.77-1.45-1A5.9 5.9 0 006 3v5a6 6 0 006 6M8 5.61l1.57 1.65L12 4.83l2.43 2.43L16 5.61V8a4 4 0 01-4 4 4 4 0 01-4-4V5.61z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M3 13a9 9 0 009 9 9 9 0 00-9-9m2.44 2.44c1.91.71 3.41 2.21 4.12 4.12a6.986 6.986 0 01-4.12-4.12M12 22a9 9 0 009-9 9 9 0 00-9 9m2.42-2.43a6.876 6.876 0 014.15-4.15 7.03 7.03 0 01-4.15 4.15M12 14a6 6 0 006-6V3a5.9 5.9 0 00-2.16.39c-.55.23-1.04.57-1.45 1L12 2 9.61 4.39c-.41-.43-.9-.77-1.45-1A5.9 5.9 0 006 3v5a6 6 0 006 6M8 5.61l1.57 1.65L12 4.83l2.43 2.43L16 5.61V8a4 4 0 01-4 4 4 4 0 01-4-4V5.61z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M3 13a9 9 0 009 9 9 9 0 00-9-9m2.44 2.44c1.91.71 3.41 2.21 4.12 4.12a6.986 6.986 0 01-4.12-4.12M12 22a9 9 0 009-9 9 9 0 00-9 9m2.42-2.43a6.876 6.876 0 014.15-4.15 7.03 7.03 0 01-4.15 4.15M12 14a6 6 0 006-6V3a5.9 5.9 0 00-2.16.39c-.55.23-1.04.57-1.45 1L12 2 9.61 4.39c-.41-.43-.9-.77-1.45-1A5.9 5.9 0 006 3v5a6 6 0 006 6M8 5.61l1.57 1.65L12 4.83l2.43 2.43L16 5.61V8a4 4 0 01-4 4 4 4 0 01-4-4V5.61z" />
              </svg>
            </div>
          </div>
          <div className="PHOTOS w-full">
            <PhotoGallery />
          </div>
        </div>
      </Layout>
    </>
  );
}
