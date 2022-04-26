/** @format */
import { db } from "../../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useMapEvents } from "react-leaflet";
import { AppContext } from "../../App";

import {
  Map,
  StyledTitleLayer,
  StyledMarker,
  StyledPopup,
  Button,
  StyledPolyline,
  Trash,
  BtnPanel,
  Zoom,
} from "./RoadsElements";

function MyComponent(positions) {
  useMapEvents({
    click: (e) => {
      let latlng = e.latlng;
      if (positions.drow) {
        if (positions.positions === null) {
          positions.setPositions([[latlng.lat, latlng.lng]]);
        } else {
          positions.setPositions([
            ...positions.positions,
            [latlng.lat, latlng.lng],
          ]);
        }
      }
    },
  });
  return null;
}

export default function Roads() {
  const app = useContext(AppContext);
  const [positions, setPositions] = useState(null);
  const [road, setRoad] = useState([]);
  const [drow, setDrow] = useState(false);
  const ref = useRef();

  const mapSelector = ref.current;
  const roadsCollectionRef = collection(db, "roads");

  useEffect(() => {
    const saveData = async () => {
      const data = await getDocs(roadsCollectionRef);
      if (data) {
        setRoad(data.docs.map((doc) => JSON.parse(doc.data().road)));
      }
    };
    saveData();
  }, [positions === null]);

  const uploadData = async () => {
    await addDoc(roadsCollectionRef, {
      road: JSON.stringify(positions),
    });
  };
  const saveRoad = () => {
    uploadData();
    setPositions(null);
    setDrow(false);
    changeCursor();
  };
  const changeCursor = () => {
    mapSelector.children[0].style.cursor =
      drow === false ? "crosshair" : "grab";
  };
  const startDrow = () => {
    setDrow(!drow);
    changeCursor();
  };
  console.log(drow);
  return (
    <div ref={ref}>
      <Map center={[50.06485, 19.96865]} zoom={13} zoomControl={false}>
        <StyledTitleLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <StyledMarker position={[50.06485, 19.96865]}>
          <StyledPopup>PYSIA</StyledPopup>
        </StyledMarker>
        <MyComponent
          positions={positions}
          setPositions={setPositions}
          drow={drow}
        />
        {road.map((el, i) => {
          return (
            <StyledPolyline color="#4487fa" key={i} positions={el} weight={8}>
              <StyledPopup>
                <Trash></Trash>
              </StyledPopup>
            </StyledPolyline>
          );
        })}
        {positions === null ? null : (
          <StyledPolyline
            color="#4487fa"
            key={Math.random()}
            positions={positions}
          ></StyledPolyline>
        )}
        <Zoom position="bottomright"></Zoom>
      </Map>
      {app.user !== null ? (
        <BtnPanel>
          <Button type="submit" onClick={positions === null ? null : saveRoad}>
            Dodaj trasę
          </Button>
          <Button onClick={() => startDrow()}>Rysuj</Button>
        </BtnPanel>
      ) : null}
    </div>
  );
}
