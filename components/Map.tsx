import React, { useEffect, useRef } from "react";

const Map = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== undefined) {
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
    }
  }, [containerRef]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div ref={containerRef} className="MAP w-full h-full" id="map" />
    </div>
  );
};

export default Map;
