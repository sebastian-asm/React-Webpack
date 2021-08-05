import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/components/Map.scss';

export default function Map({ mapLocation, address }) {
  const iconLocation = L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/FaztWeb/react-leaflet-example/871b975703dec0ccd30ac56c96016af69cf7f0c0/src/assets/venue_location_icon.svg',
    iconSize: [50, 45],
  });

  return (
    mapLocation && (
      <MapContainer
        center={[mapLocation.latitude, mapLocation.longitude]}
        zoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[mapLocation.latitude, mapLocation.longitude]}
          icon={iconLocation}
        >
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    )
  );
}
