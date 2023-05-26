import React, { useEffect, useState } from "react";
const { kakao } = window;

function MapComponent({ onPlaceSelect }) {
  const [currentLocation, setCurrentLocation] = useState(null); // 현재 위치 좌표를 저장할 상태 추가

  useEffect(() => {
    const initializeMap = () => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(
          currentLocation.latitude,
          currentLocation.longitude
        ),
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

    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCurrentLocation({ latitude, longitude });
        },
        (error) => {
          console.log("Geolocation error:", error);
        }
      );
    }

    if (currentLocation) {
      initializeMap();
    }
  }, [currentLocation, onPlaceSelect]);

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
