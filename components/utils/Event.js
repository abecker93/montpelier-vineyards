import LocationIcon from '../utils/LocationIcon'

const Event = ({ event }) => {
    const eventDate = new Date(event?.dateAndTime)
    const month = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        timeZone: 'America/New_York',
    }).format(eventDate)
    const dateParts = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        year: 'numeric',
        timeZone: 'America/New_York',
    }).formatToParts(eventDate)
    const dayAndYear = dateParts.find((part) => part.type === 'day').value + ", " + dateParts.find((part) => part.type === 'year').value
    const time = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'America/New_York',
    }).format(eventDate)

    return (
        <>
            <div className="items-stretch md:flex md:gap-8">
                {event?.eventPhoto?.url && (
                    <img
                        src={event.eventPhoto.url}
                        alt={event?.eventTitle + " event poster"}
                        className="w-full md:w-64 max-h-96 object-contain mb-6 md:mb-0"
                    />
                )}
                <div className="flex-1">
                <div
                    className="flex items-end text-marv"
                >
                    <h2
                        className="text-3xl font-medium uppercase"
                    >
                        {month}
                    </h2>
                    <span
                        className="ml-5 text-2xl"
                    >
                        {dayAndYear + " — " + time}
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
            </div>
        </>
    )
}

export default Event
