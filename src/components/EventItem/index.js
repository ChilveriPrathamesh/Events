// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, setActiveEventId} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventClasName = isActive ? 'event-img active' : 'event-img'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item-container">
      <button className="event-btn" type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventClasName} />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
