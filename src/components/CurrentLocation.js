const CurrentLocation = () => {
    return (
        <div className="weather-content">
        <div className="place text-end">
          <p className="city">Vikaspuri</p>
          <p className="country">IN</p>
        </div>
        <div className="footer px-3">
          <div className="date-content">
            <p className="text-large">18:31:00</p>
            <p className="text-small">Wednesday, 15 February 2023</p>
          </div>
          <p className="large1 text-end flex-grow-1">
            23<sup>o</sup>c
          </p>
        </div>
      </div>
    )
}

export default CurrentLocation;