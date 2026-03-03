// components/Map.js
'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';

// Add this compatibility package – fixes default icons in bundlers like Next.js
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import 'leaflet/dist/leaflet.css';

// Clustering (side-effect import – must come AFTER leaflet import)
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

// You can keep your manual fix as backup, but the compatibility package usually makes it unnecessary
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({ ... });

export default function Map({ places, center = [25.2138, 75.9630], zoom = 12, height = '600px' }) {
  const mapRef = useRef(null);
  const containerRef = useRef(null);
        
  useEffect(() => {
    if (!containerRef.current) return;

    if (!mapRef.current) {
      mapRef.current = L.map(containerRef.current).setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 19,
      }).addTo(mapRef.current);

      const markers = L.markerClusterGroup();

      places.forEach((place) => {
        if (!place.geo?.lat || !place.geo?.lng) return;

        const popupHtml = `
          <div style="width: 220px; font-family: Arial, sans-serif;">
            <img src="${place.image1 || place.image2}" alt="${place.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px; margin-bottom: 8px;" />
            <h3 style="margin: 0; font-size: 16px;">${place.title}</h3>
            <p style="margin: 4px 0; color: #666; font-size: 13px;">${place.tag || ''}</p>
            <a href="/places/${place.slug}" style="color: #007bff; text-decoration: none; font-size: 13px; display: inline-block; margin-top: 4px;"> Explore Place →</a>
          </div>
        `;

        const marker = L.marker([place.geo.lat, place.geo.lng])
          .bindPopup(popupHtml, { maxWidth: 300 });

        markers.addLayer(marker);
      });

      mapRef.current.addLayer(markers);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [places, center, zoom]);

  return (
    <div
      ref={containerRef}
      style={{ height, width: '100%', zIndex: 10,}}
      className="rounded-xl overflow-hidden shadow-xl"
    />
  );
}