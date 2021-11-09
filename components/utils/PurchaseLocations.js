import React, { useState, useEffect } from 'react';
// import {  } from 'graphql-request'
// import env from "react-dotenv";
import RestaurantIcon from './RestaurantIcon'
import RetailIcon from './RetailIcon'
import Map from './PurchaseMap'
import dynamic from 'next/dynamic'

// https://www.google.com/maps/@44.6028352,-72.8234637,10.01z/data=!4m3!11m2!2s2d7iMKH2zuEjUh3Jar_dBu8tq7f1hw!3e3?hl=en&authuser=0

const PurchaseLocations = (props) => {

    const {
        locations
    } = props;


        //! {
        //!     "id": "ckuj8oxxsni9z0c71q66w93ki",
        //!     "locationTitle": "The Social",
        //!     "locationType": "Restaurant",
        //!     "locationWebsite": "http://thesocialvt.com/",
        //!     "phoneNumber": "(802) 223-0722",
        //!     "locationAddress": "147 Main Street\nMontpelier, VT 05602",
        //!     "locationGeoCoords": {
        //!         "latitude": 44.262148,
        //!         "longitude": -72.57243749999999
        //!     }
        //! }
    // const MapWithNoSSR = dynamic(() => import("./PurchaseMap"), {
    // ssr: false
    // });

    // useEffect(() => {
    //     setBrowser(true)
    // })

    const DEFAULT_CENTER = [44.6028352, -72.8234637]


    return (
        <React.Fragment>
            <h4
                className="text-3xl text-center text-marv py-2 leading-10"
            >Find us at retailers and restaurants</h4>
            <section
                className="grid grid-cols-1 md:grid-cols-2"
            >
                <section>
                    {/* <div
                        className=""
                    >
                        Filter by
                    </div> */}
                    <div
                        // className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-2"
                    >
                        {/* {locations.map((location) => {
                                return (
                                    <div
                                        key={location.id}
                                        className="leading-6"
                                    >
                                        <p
                                            className="text-lg text-marv font-medium flex content-center py-2"
                                        >
                                            {location.locationType === "Restaurant" ? 
                                                <RestaurantIcon/>
                                                :
                                                <RetailIcon/>
                                            }
                                            <div
                                                className="pl-5 text-marv font-medium"
                                            >
                                                {location.locationTitle}
                                            </div>
                                        </p>
                                        <p
                                        >{location.locationAddress}</p>
                                            <a
                                                href={"tel:" + location.phoneNumber}
                                            >
                                                Tel: {location.phoneNumber}
                                        </a>
                                        <br/>
                                            <a
                                            className="text-blueMetal"
                                                href={location.locationWebsite}
                                            >
                                                {location.locationWebsite}
                                            </a>
                                    </div>
                                )
                            })} */}
                        <ul
                            className="px-5 py-2"
                        >
                            {locations.map((location) => {
                                return (
                                    <li
                                        key={location.id}
                                        className="py-3 leading-6"
                                    >
                                        <p
                                            className="text-lg text-marv font-medium flex content-center py-2"
                                        >
                                            {location.locationType === "Restaurant" ? 
                                                <RestaurantIcon/>
                                                :
                                                <RetailIcon/>
                                            }
                                            <div
                                                className="pl-5 text-marv font-medium"
                                            >
                                                {location.locationTitle}
                                            </div>
                                        </p>
                                        <p
                                        >{location.locationAddress}</p>
                                            <a
                                                href={"tel:" + location.phoneNumber}
                                            >
                                                Tel: {location.phoneNumber}
                                        </a>
                                        <br/>
                                            <a
                                            className="text-blueMetal break-words"
                                                href={location.locationWebsite}
                                            >
                                                {location.locationWebsite}
                                            </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
                <section
                    className=""
                >
                    <Map className="homeMap" center={DEFAULT_CENTER} zoom={9}>
                      {({ TileLayer, Marker, Popup }) => (
                        <>
                          <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                            {locations.map((location) => {
                                
                                let position = [location.locationGeoCoords.latitude, location.locationGeoCoords.longitude]
                            return (
                                <Marker key={location.id} position={position}>
                                    <Popup>
                                    <div
                                        key={location.id}
                                        className="py-3 leading-6"
                                    >
                                        <p
                                            className="text-lg text-marv font-medium flex content-center"
                                        >
                                            {location.locationType === "Restaurant" ? 
                                                <RestaurantIcon/>
                                                :
                                                <RetailIcon/>
                                            }
                                            <div
                                                className="pl-5 text-marv font-medium"
                                            >
                                                {location.locationTitle}
                                            </div>
                                        </p>
                                        <p
                                        >{location.locationAddress}</p>
                                            <a
                                                href={"tel:" + location.phoneNumber}
                                            >
                                                Tel: {location.phoneNumber}
                                        </a>
                                        <br/>
                                            <a
                                            className="text-blueMetal"
                                                href={location.locationWebsite}
                                            >
                                                {location.locationWebsite}
                                            </a>
                                    </div>
                                    </Popup>
                                </Marker>
                            )
                          })}
                        </>
                      )}
                    </Map>
                </section>
            </section>
        </React.Fragment>
    )
}

export default PurchaseLocations