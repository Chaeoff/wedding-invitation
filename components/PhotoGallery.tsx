import Image from "next/image";
import { useState } from "react";

export const PhotoGallery = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const imageArray = [
    {
      path: "p1.JPG",
      width: 3840,
      height: 2301,
    },
    {
      path: "p2.jpg",
      width: 2320,
      height: 2949,
    },
    {
      path: "p3.jpg",
      width: 3643,
      height: 1829,
    },
    {
      path: "p4.jpg",
      width: 3124,
      height: 2878,
    },
    {
      path: "p5.jpg",
      width: 3090,
      height: 3030,
    },
    {
      path: "p6.jpeg",
      width: 2973,
      height: 3774,
    },
    {
      path: "p7.jpg",
      width: 2560,
      height: 3840,
    },
    {
      path: "p8.jpg",
      width: 2246,
      height: 3404,
    },
    {
      path: "p9.jpg",
      width: 2423,
      height: 3634,
    },
    {
      path: "p10.jpg",
      width: 3671,
      height: 2447,
    },
    {
      path: "p11.jpg",
      width: 1552,
      height: 1870,
    },
    {
      path: "p12.JPG",
      width: 2560,
      height: 3840,
    },
    {
      path: "p13.jpeg",
      width: 3840,
      height: 2559,
    },
    {
      path: "p14.jpg",
      width: 3840,
      height: 2560,
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center bg-white/30 items-center relative gap-y-4 px-3">
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
