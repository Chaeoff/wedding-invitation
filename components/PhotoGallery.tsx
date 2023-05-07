import Image from "next/image";
import { useState } from "react";

export const PhotoGallery = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const imageArray = [
    {
      path: "1.JPG",
      width: 3840,
      height: 2301,
    },
    {
      path: "2.JPG",
      width: 2320,
      height: 3840,
    },
    {
      path: "3.jpg",
      width: 3643,
      height: 1829,
    },
    {
      path: "4.JPEG",
      width: 3126,
      height: 3837,
    },
    {
      path: "5.JPG",
      width: 3093,
      height: 3814,
    },
    {
      path: "6.JPEG",
      width: 2973,
      height: 3774,
    },
    {
      path: "7.JPG",
      width: 2560,
      height: 3840,
    },
    {
      path: "8.jpg",
      width: 2246,
      height: 3404,
    },
    {
      path: "9.JPG",
      width: 2423,
      height: 3634,
    },
    {
      path: "10.jpg",
      width: 3671,
      height: 2447,
    },
    {
      path: "11.jpg",
      width: 1552,
      height: 1870,
    },
    {
      path: "12.JPG",
      width: 2560,
      height: 3840,
    },
    {
      path: "13.JPEG",
      width: 3840,
      height: 2559,
    },
    {
      path: "14.JPG",
      width: 3840,
      height: 2560,
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center bg-white/30 items-center relative gap-y-1">
      <div className="flex flex-col items-center justify-center gap-y-2 pt-14 pb-6">
        <span className="text-[#7196cb] tracking-widest text-sm">GALLERY</span>
        <span className="text-[#446ea9] tracking-widest text-xl">갤러리</span>
      </div>
      {imageArray.map((item, index) => {
        return (
          <div key={index} className="w-full">
            <Image
              src={`/images/${item.path}`}
              alt={`${index}`}
              width={item.width}
              height={item.height}
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};
