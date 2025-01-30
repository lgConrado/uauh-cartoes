import React, { useEffect } from "react";
import Logo from "../Logo";

const MapaRede = () => {
  useEffect(() => {
    // Load Google Maps script dynamically
    const apiKey = "AIzaSyBPXRWWaCPq7Bmq6I_WbTDika7jKUyaCK8"; // Replace with your API key
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;

    // Initialize the map after the script loads
    script.onload = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.653080345826453, lng: -52.60374836030337 }, // Example: São Paulo coordinates
        zoom: 15,
      });

      // Add a marker
      new window.google.maps.Marker({
        position: { lat: -23.653080345826453, lng: -52.60374836030337 },
        map: map,
        title: "Uauh Cartões",
      });
    };

    // Append the script to the document
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="mapa">
      <div className="mapa__logo">
        <Logo theme="azul" variant="cartoes" />
      </div>
      <div className="mapa__box">
        <div className="mapa__mapa" id="map"></div>
      </div>
    </section>
  );
};

export default MapaRede;
