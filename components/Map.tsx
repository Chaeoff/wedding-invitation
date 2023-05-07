import React, { useEffect, useRef, useState } from "react";

const Map = () => {
  const containerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}`;
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);

  useEffect(() => {
    if (!mapLoaded) {
      return;
    }
    const { kakao } = window;
    const markerPosition = new kakao.maps.LatLng(
      37.55911077784374,
      126.98445827355191
    );
    const options = {
      center: markerPosition,
      level: 4,
    };

    let map = new kakao.maps.Map(containerRef.current, options);
    new kakao.maps.Marker({
      map,
      position: markerPosition,
    });
  }, [containerRef, mapLoaded]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div ref={containerRef} className="MAP w-full h-full" id="map" />
    </div>
  );
};

export default Map;
