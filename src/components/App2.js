import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
// import * as parkData from "./data/skateboard-parks.json";
import mapStyles from "./mapStyles";
import cities from "./citydetails";
import { Typography } from "@material-ui/core";
// let value;
function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);
    // console.log(selectedPark);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 31.104815, lng: 77.173401 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {cities.map((city) => (
        <Marker
          key={city.ID}
          position={{
            lat: city.geometry[0],
            lng: city.geometry[1],
          }}
          onClick={() => {
            setSelectedPark(city);
            // value = selectedPark;
            // value=city
            console.log(selectedPark);
          }}
        />
      ))}
      {selectedPark && (
        <InfoWindow
          style={{ backgroundColor: "black" }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry[0],
            lng: selectedPark.geometry[1],
          }}
        >
          {/* <div>
            <h2>{selectedPark.NAME}</h2>
            <p>{selectedPark.DESCRIPTIO}</p>
          </div> */}
          <div style={{ backgroundColor: "#9e9e9e", color: "black" }}>
            <Typography variant="h1">{selectedPark.Name}</Typography>

            <div
              style={{
                display: "flexbox",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h2" style={{ fontWeight: "bold" }}>
                Av. Annual Rainfall (mm)
              </Typography>
              <Typography variant="h3">{selectedPark.rain}</Typography>
            </div>

            <div
              style={{ display: "flexbox", flexDirection: "row", gap: "30px" }}
            >
              <Typography variant="h2" style={{ fontWeight: "bold" }}>
                Rainy days
              </Typography>
              <Typography variant="h3">{selectedPark.days}</Typography>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

const App = ({ user, setuser }) => {
  // setuser({ ...user, : e.target.value })
  // const [newstate, setnewstate] = useState({
  //   ID: 0,
  //   Name: "",
  //   geometry: [],
  // });
  // // setnewstate(value);
  // console.log(newstate);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD1evnI9XmPL4W05NUdZZe92af90-Esdd0`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default App;
