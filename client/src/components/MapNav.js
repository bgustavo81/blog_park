import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { GoogleMap, Marker, withScriptjs, withGoogleMap, InfoWindow } from 'react-google-maps';
import * as nationalParks from '../data/national-parks.json';

const MapNavigation = (props) => {
    const [selectedPark, setSelectedPark] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setUserLocation([position.coords.latitude, position.coords.longitude])
        )
    }, [])

    return (
        <div style={{ width: '100vw', boxSizing: 'border-box'}}>
        <GoogleMap 
            defaultZoom={4} 
            defaultCenter={{ lat:39.8097, lng:-98.5556  }}
        >
            {userLocation ? props.isMarkerShown && <Marker position={{ lat: userLocation[0], lng: userLocation[1] }} icon={{ url: '/human.png'}} /> : 
                                            props.isMarkerShown && <Marker position={{ lat: 39.8097, lng: -98.5556 }} icon={{ url: '/human.png'}} />}

            {nationalParks.default.map(park => (
                <Marker
                key={park.LocationNumber}
                position={{
                    lat: park.Latitude,
                    lng: park.Longitude
                }}
                onClick={() => {
                    setSelectedPark(park);
                }}
                icon={{
                    url: `/tree.png`,
                    scaledSize: new window.google.maps.Size(25, 25)
                }}
                />
            ))}

            {selectedPark && (
                <InfoWindow
                onCloseClick={() => {
                    setSelectedPark(null);
                }}
                position={{
                    lat: selectedPark.Latitude,
                    lng: selectedPark.Longitude
                }}
                >
                <div style={{ textAlign: "center" }}>
                    <h2>{selectedPark.LocationName}</h2>
                    <hr></hr>
                    <div style={{ margin: "20px 0", fontSize: "16px" }}>
                        Address: {selectedPark.Address}
                        <br/>
                        {selectedPark.City}, {selectedPark.State} {selectedPark.ZipCode}
                    </div>
                    <Link 
                        to={`/map/${selectedPark.LocationNumber}`} 
                        style={{ textDecoration: 'none', marginBottom: '24px'}}
                        className="mapNavCenter"
                    >
                        <Button variant="outlined" color="secondary">Learn More</Button>
                    </Link>
                </div>
                </InfoWindow>
            )}
        </GoogleMap>
        </div>
    );
}


const WrappedMap = withScriptjs(withGoogleMap(MapNavigation));

export default function MapNav() {
    return (
        <div style={{ width: "100%", height: "90vh" }}>
            <WrappedMap
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`}
                loadingElement={<div style={{ height: '90vh' }} />}
                containerElement={<div style={{ height: '90vh' }} />}
                mapElement={<div style={{ height: '90vh' }} />}
            />
        </div>
    )
};