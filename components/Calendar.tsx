export const cls = (...classname: string[]) => {
  return classname.join(" ");
};

export const Calendar = () => {
  const dateArray = Array.from({ length: 31 }, (_, i) => i + 1);
  const dayArray = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="w-full grid grid-cols-7 text-center px-4">
      {dayArray.map((i) => {
        return (
          <div
            key={i}
            className={cls(
              i === "일" ? "text-red-400" : "text-[#49413a]/70",
              "m-2"
            )}
          >
            {i}
          </div>
        );
      })}
      <div className="col-span-6" />
      {dateArray.map((i) => {
        return (
          <div
            key={i}
            className={cls(
              (i - 2) % 7 === 0 ? "text-red-400" : "text-[#49413a]/70",
              "m-2"
            )}
          >
            <span
              className={cls(
                i === 1 ? "px-2 py-1 rounded-full bg-violet-300" : ""
              )}
            >
              {i}
            </span>
          </div>
        );
      })}
    </div>
  );
};
