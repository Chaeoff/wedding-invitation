import React, { useEffect, useRef, useState } from "react";

const Map = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const markerPosition = new window.kakao.maps.LatLng(
          37.55911077784374,
          126.98445827355191
        );
        const options = {
          center: markerPosition,
          level: 4,
        };

        let map = new window.kakao.maps.Map(containerRef.current, options);
        new window.kakao.maps.Marker({
          map,
          position: markerPosition,
        });
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div ref={containerRef} className="MAP w-full h-full" id="map" />
    </div>
  );
};

export default Map;
