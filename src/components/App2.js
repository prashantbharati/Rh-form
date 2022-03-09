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

const MapWrapped = withScriptjs(
  withGoogleMap((props) => {
    let user = props.user,
      setuser = props.setuser;

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
        defaultCenter={{ lat: props.lat, lng: props.lng }}
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
              props.handleclick();
              setuser({ ...user, city: city.Name });
              console.log(user);
              // console.log(user, setuser, "lololololololol");
              console.log(selectedPark);
            }}
          />
        ))}
        {/* {selectedPark && (
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
                style={{
                  display: "flexbox",
                  flexDirection: "row",
                  gap: "30px",
                }}
              >
                <Typography variant="h2" style={{ fontWeight: "bold" }}>
                  Rainy days
                </Typography>
                <Typography variant="h3">{selectedPark.days}</Typography>
              </div>
            </div>
          </InfoWindow>
        )} */}
      </GoogleMap>
    );
  })
);

const App = ({ user, setuser, lat, lng, handleclick }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        user={user}
        lat={lat}
        lng={lng}
        handleclick={handleclick}
        setuser={setuser}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD1evnI9XmPL4W05NUdZZe92af90-Esdd0`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default App;
