import moment from 'moment';
import LocationIcon from '../utils/LocationIcon'
import cx from 'classnames'

const Event = ({ event }) => {

    return (
        <>
            <div className="items-stretch">
                <div
                    className="flex items-end text-marv"
                >
                    <h2
                        className="text-3xl font-medium uppercase"
                    >
                        {moment(event?.dateAndTime).format('MMMM')}
                    </h2>
                    <span
                        className="ml-5 text-2xl"
                    >
                        {moment(event?.dateAndTime).format('D') + ", "+ moment(event?.dateAndTime).format('YYYY') + " — " + moment(event?.dateAndTime).format('hh:mm a')}
                    </span>
                </div>
                <div>
                    <h3 className="text-2xl text-marv font-semibold py-1">
                        {event?.eventTitle}
                    </h3>
                </div>
                <div
                    className="py-3"
                >
                    <p
                        className="text-black font-normal text-lg"
                    >
                        {event?.eventDescription}
                    </p>
                </div>
                <div className="text-marv flex items-center">
                    <LocationIcon />
                    <p
                        className="ml-1 text-black font-normal text-lg"
                    >
                        <span>{event?.address}</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Event