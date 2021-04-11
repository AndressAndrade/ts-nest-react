import React, { useEffect, useState } from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import * as L from 'leaflet';

import api from "../services/api";
import 'leaflet/dist/leaflet.css';

const markerHtmlStyles = (cor: string) => `
  background-color: ${cor};
  width: 3rem;
  height: 3rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

const DefaultIcon = (cor: string) => L.divIcon({
  className: "my-custom-pin",
  iconAnchor: [0, 24],
  popupAnchor: [0, -36],
  html: `<span style="${markerHtmlStyles(cor)}" />`
});

const cores = [
    "#836FFF",
    "#1E90FF",
    "#2E8B57",
    "#D2691E",
    "#B22222"
];

interface Route {
    title: string;
    startPosition: {
        latitude: number;
        longitude: number;
    };
    endPosition: {
        latitude: number;
        longitude: number;
    };
}

const Home: React.FC = () => {

    const [routes, setRoutes] = useState<Route[]>([]);

    useEffect(() => {
        api.get('/routes').then(response => {
            setRoutes(response.data)
        });
    }, []);

    if (!routes) {
        return <p>Carregando...</p>
      }

    return (
        <div className="map-container">
              <Map 
                center={[-12.936522, -38.336435]} 
                zoom={16} 
                style={{ height: '100vh', width: '100wh' }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                />
                {
                    routes.map((route, index) => {return (
                        <div key={route.title}>
                            <Marker key={`inicio_${route.title}`} icon={DefaultIcon(cores[index])} position={[route.startPosition.latitude,route.startPosition.longitude]}>
                                <Popup>
                                    Início rota: {route.title}
                                </Popup>
                            </Marker>
                            <Marker key={`fim_${route.title}`} icon={DefaultIcon(cores[index])} position={[route.endPosition.latitude,route.endPosition.longitude]}>
                                <Popup>
                                    Fim rota: {route.title}
                                </Popup>
                            </Marker>
                        </div>
                    )})
                }
              </Map>
        </div>
    );
  }
  
export default Home;