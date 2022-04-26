/** @format */

import styled from "styled-components";
import { IoTrash } from "react-icons/io5";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  ZoomControl,
} from "react-leaflet";

export const Map = styled(MapContainer)`
  position: relative;
  top: 2.5em;
  width: 100vw;
  height: calc(100vh - 2.5em);
  z-index: 1;
  cursor: ${(props) => props.cursor};
`;

export const StyledTitleLayer = styled(TileLayer)``;
export const StyledMarker = styled(Marker)``;
export const Trash = styled(IoTrash)`
  position: absolute;
  cursor: pointer;
  height: 15px;
  width: 15px;
`;
export const StyledPopup = styled(Popup)`
  z-index: 50000;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 30px;
  color: white;
  background-color: #4487fa;
  border-radius: 15px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: none;
`;

export const BtnPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  position: absolute;
  top: 2.8em;
  left: 0.3em;
  z-index: 1;
  gap: 5px;
`;

// export const DrowButton = styled.button`
//   z-index: 10000;
//   top: 200px;
//   right: 20px;
//   height: 50px;
//   width: 50px;
//   cursor: pointer;
// `;

export const DelBtn = styled.button`
  display: flex;
`;
export const Zoom = styled(ZoomControl)``;
export const StyledPolyline = styled(Polyline)`
  background-color: green;
`;
