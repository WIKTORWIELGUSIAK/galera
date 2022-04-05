/** @format */
import { db } from "../../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet";

import {
  Map,
  StyledTitleLayer,
  StyledMarker,
  StyledPopup,
  Button,
  ClickButton,
  StyledPolyline,
} from "./RoadsElements";
// function LocationMarker() {
//   const [position, setPosition] = useState(null);
//   const [a, setA] = useState("");
//   const map = useMapEvents({
//     click(e) {
//       let latlng = e.latlng;
//       if (position === null) {
//         setPosition([latlng.lat, latlng.lng]);
//       } else {
//         console.log("try");
//         setA([...position]);
//         setPosition([position, [latlng.lat, latlng.lng]]);
//       }
//     },
//   });
//   console.log(position);
//   console.log(a);
//   return (
//     <div>
//       <StyledMarker position={[50, 20]}>
//         <StyledPopup>You are here</StyledPopup>
//       </StyledMarker>
//       <StyledPolyline
//         positions={[
//           [50, 20],
//           [50.05, 20.05],
//         ]}
//       />
//     </div>
//   );
// }

function MyComponent(positions) {
  useMapEvents({
    click: (e) => {
      let latlng = e.latlng;
      console.log(latlng);
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
  const [positions, setPositions] = useState(null);
  const [road, setRoad] = useState([]);
  const [drow, setDrow] = useState(false);
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
    if (road === null) {
      uploadData();
      setPositions(null);
    } else {
      uploadData();
      setPositions(null);
    }
  };
  const startDrow = () => {
    setDrow(!drow);
  };
  console.log(road);
  return (
    <div>
      <Map center={[50.06485, 19.96865]} zoom={13}>
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
            <StyledPolyline key={i} positions={el} weight={10}>
              <StyledPopup>PYSIA</StyledPopup>
            </StyledPolyline>
          );
        })}
        {positions === null ? null : (
          <StyledPolyline
            key={Math.random()}
            positions={positions}
          ></StyledPolyline>
        )}
      </Map>
      <Button type="submit" onClick={saveRoad}>
        Dodaj trasę
      </Button>
      <ClickButton onClick={() => setDrow(!drow)}>Rysuj</ClickButton>
    </div>
  );
}
