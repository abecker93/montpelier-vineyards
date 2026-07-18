import React from 'react';
import RestaurantIcon from './RestaurantIcon'
import RetailIcon from './RetailIcon'
import Map from './PurchaseMap'

const externalUrl = (url) => {
    if (!url) return null
    return url.startsWith('http') ? url : `https://${url}`
}

const PurchaseLocations = ({ locations }) => {

    const DEFAULT_CENTER = [44.6028352, -72.8234637]

    return (
        <React.Fragment>
            <h4
                className="text-3xl text-center text-marv py-2 leading-10"
            >Find us at retailers and restaurants</h4>
            <section
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
                <section>
                        <ul className="py-2 divide-y divide-marv divide-opacity-25">
                            {locations.map((location) => {
                                const website = externalUrl(location.locationWebsite)

                                return (
                                    <li
                                        key={location.id}
                                        className="py-5 leading-6"
                                    >
                                        <p
                                            className="text-lg text-marv font-medium flex items-center py-2"
                                        >
                                            {location.locationType === "Restaurant" ? 
                                                <RestaurantIcon/>
                                                :
                                                <RetailIcon/>
                                            }
                                            <span
                                                className="pl-5 text-marv font-medium"
                                            >
                                                {location.locationTitle}
                                            </span>
                                        </p>
                                        <p>{location.locationAddress}</p>
                                        {location.phoneNumber && (
                                            <>
                                                <a
                                                href={"tel:" + location.phoneNumber}
                                                >
                                                    Tel: {location.phoneNumber}
                                                </a>
                                                <br/>
                                            </>
                                        )}
                                        {website && (
                                                <a
                                                    className="text-blueMetal break-words"
                                                    href={website}
                                                >
                                                    {location.locationWebsite}
                                                </a>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
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
                                            className="text-lg text-marv font-medium flex items-center"
                                        >
                                            {location.locationType === "Restaurant" ? 
                                                <RestaurantIcon/>
                                                :
                                                <RetailIcon/>
                                            }
                                            <span
                                                className="pl-5 text-marv font-medium"
                                            >
                                                {location.locationTitle}
                                            </span>
                                        </p>
                                        <p>{location.locationAddress}</p>
                                        {location.phoneNumber && (
                                            <>
                                                <a href={"tel:" + location.phoneNumber}>
                                                    Tel: {location.phoneNumber}
                                                </a>
                                                <br/>
                                            </>
                                        )}
                                        {externalUrl(location.locationWebsite) && (
                                            <a
                                                className="text-blueMetal"
                                                href={externalUrl(location.locationWebsite)}
                                            >
                                                {location.locationWebsite}
                                            </a>
                                        )}
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
