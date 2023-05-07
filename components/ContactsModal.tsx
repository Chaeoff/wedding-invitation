import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export const ContactsModal = ({
  setOpenContact,
}: {
  setOpenContact: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setOpenContact(false)}
      className="fixed top-0 left-0 bottom-0 right-0 w-full z-20 m-auto flex h-full flex-col justify-start bg-black/40"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[90%] h-auto overflow-hidden gap-y-8 bg-white pb-6 rounded-lg flex flex-col justify-start items-center"
        >
          <div className="flex flex-col py-3 justify-center items-center gap-y-1 w-full bg-[#ced2ec8b]">
            <span className="text-[#7196cb] h-7 flex justify-center items-center text-xs">
              C O N T A C T
            </span>
            <span className="text-[#446ea9] text-lg h-7 flex justify-center items-center ">
              연 락 하 기
            </span>
          </div>
          <div className="GROOM flex justify-center gap-x-10 w-full px-6">
            <div className="flex text-[#668eaa] flex-col justify-between items-center">
              <span>신랑</span>
              <span>신랑 아버지</span>
              <span>신랑 어머니</span>
            </div>
            <div className="flex flex-col justify-between items-center">
              <span>하상운</span>
              <span>하명수</span>
              <span>강정숙</span>
            </div>
            <div className="flex flex-col justify-between gap-y-3 items-center">
              <div className="flex items-center gap-x-5">
                <Link href="tel:01051394468">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#668eaa"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#668eaa"
                    className="w-[14px] h-[14px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </Link>
                <Link href="sms:01051394468">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#668eaa"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffff"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex items-center gap-x-5">
                <Link href="tel:01038723352">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#668eaa"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#668eaa"
                    className="w-[14px] h-[14px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </Link>
                <Link href="sms:01038723352">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#668eaa"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffff"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex items-center gap-x-5">
                <Link href="tel:01057734468">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#668eaa"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#668eaa"
                    className="w-[14px] h-[14px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </Link>
                <Link href="sms:01057734468">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#668eaa"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffff"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-10 w-full">
            <div className="w-full border-t" />
          </div>
          <div className="BRIDE flex justify-center gap-x-10 w-full px-6">
            <div className="flex text-[#db91a8] flex-col justify-between items-center">
              <span>신부</span>
              <span>신부 아버지</span>
              <span>신부 어머니</span>
            </div>
            <div className="flex flex-col justify-between items-center">
              <span>김예린</span>
              <span>김용현</span>
              <span>김재현</span>
            </div>
            <div className="flex flex-col justify-between gap-y-3 items-center">
              <div className="flex items-center gap-x-5">
                <Link href="tel:01025734139">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#db91a8"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#db91a8"
                    className="w-[14px] h-[14px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </Link>
                <Link href="sms:01025734139">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#db91a8"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffff"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex items-center gap-x-5">
                <Link href="tel:01034191963">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#db91a8"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#db91a8"
                    className="w-[14px] h-[14px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </Link>
                <Link href="sms:01034191963">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#db91a8"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffff"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex items-center gap-x-5">
                <Link href="tel:01046504139">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#db91a8"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#db91a8"
                    className="w-[14px] h-[14px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </Link>
                <Link href="sms:01046504139">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#db91a8"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffff"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
