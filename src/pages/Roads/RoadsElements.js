/** @format */

import styled from "styled-components";
import { IoTrash } from "react-icons/io5";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
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
export const StyledPolyline = styled(Polyline)`
  color: red;
`;

export const Button = styled.button`
  position: absolute;
  z-index: 10000;
  top: 50px;
  right: 20px;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;
export const ClickButton = styled.button`
  position: absolute;
  z-index: 10000;
  top: 200px;
  right: 20px;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

export const DelBtn = styled.button`
  display: flex;
`;
