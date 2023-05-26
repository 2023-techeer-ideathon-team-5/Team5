import React, { useEffect } from "react";
const { kakao } = window;

function MapComponent({ onPlaceSelect }) {
  useEffect(() => {
    const initializeMap = () => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);

      kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        const latlng = mouseEvent.latLng;

        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.coord2Address(
          latlng.getLng(),
          latlng.getLat(),
          function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              const placeName = result[0].address.address_name;
              onPlaceSelect(placeName);
            }
          }
        );
      });
    };

    if (window.kakao && window.kakao.maps) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false`;

      script.onload = () => {
        kakao.maps.load(() => {
          initializeMap();
        });
      };

      document.head.appendChild(script);
    }
  }, [onPlaceSelect]);

  return (
    <div
      id="map"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "80%",
      }}
    ></div>
  );
}

export default MapComponent;
