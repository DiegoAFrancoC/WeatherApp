import React, { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {

  const [isCelsius, setIsCelsius] = useState(true)

	const changeTemperature = () => setIsCelsius(!isCelsius)
  
	return (
    <article className='card'>
        <h1 className='card__title'>Weather App</h1>
        <h2 className='card__subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <section className='card__first-section'>
            <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="Weather icon" />
        </section>
        <section className='card__second-section'>
            <h3 className='second__title'>"{weather?.weather[0].description}"</h3>
            <ul className='second__list'>
              <li className='second__item'><img src="data:image/png;base64,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" alt="Wind Speed" /><span className='second__span'>Wind Speed</span> {weather?.wind.speed}m/s</li>
              <li className='second__item'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAWlBMVEX///9opP9gof9en//3+v9io//8/f/x9v/0+P/Z5//n8P9sp//g6//s8//Q4v+vzv/F2/+40/+dxP+/2P9vqv92rf+Lu/+As/+Gt/+lyP+Vv/9Wm//J3/9/sP/yH1y4AAADuUlEQVRoge2Y2Y6rMAyGQ8BAEiDsW+n7v+Yx085SYhdKRyMdKd9VJUJ+7HhLhfB4PB6Px+PxeDwej8fj8dyIddFYW5Uq+VPZtOlbCGUYStPV6u90q1bK4BMJY/Y3snr4Vr1JS8uvjjM7diDNMJdvnoqSEGyRfUQvTqs2vHlHSpDzO6eiXFkExphavHQPzpHBfNpqbShd3HN218Y1bL9SdieNjnpJ6uKWjbs2JFxjilPCJacbBObDi5FWS1kojWeeTIZcfSYHooE84ZVwRGGMYGNABsaMFvfPRmI5dEwgEsSqsrbRQhSswTDh+fffZ4pB3OMLlnhB1gdlkykIATe6dEvPGQzlKvKoIgHTuyHOWR4LsBK+9pOcwagbje5D2adUVBwz2bKn+mMnK9JtObs9GCPK221+xN4DumMcM2kmeyHcT5Llrq5un0oCrPUTMlGx6V0RtU5Ou8ITn7cBtsS5rudrUD/7PqOF4w0Y93STjpdtbfaRkLHKRc1/H0aSa/JuKisiGe6GTPhupJZFpULkTAG/mZeKwRFOd4QrLrTWilv0EALOIX3BnvCHyaWw2+/ftXhihPHg8vEzq9nsvj/uRbHxCAx7Z8wkMSiR0Q2AonV76WjH63Vu+HRuyN2xXuj2sG5wiaJtjGIWItJM3FlnpMVdytULWlhT5fT2AVemR0ZXYjUavLygi8LxfG1bYlRbJxJ93NdYqNguRQqvRxnpcgCqR5K1JKlGYqNrlD8vpNu94zTPUxwGC6qRUHW7MFSmYL1Tr3g6MANcLjDYZJ3+3Medo8tsD7NY2ILGg5NERU4koZNUjD/lOeH1zToWs6MMyzGDX3f1D+VJJI45qyMeA5qL3O7F4PopUridG7YDOd/bM0GNrYeER+F8tOtqZnPAhlicFKZqwMUpm0yDwA9U07MG/FS42gY2UUHI6wrme9KHZw1eU6J8TAkg7lKVW+OwucbdyZi+v/9Y5+kZO5vbtX/J9VJ9X1g8nf92gY3F7I0+SrKirKa67oeuNcZ0SfyO7uaMJdR7w1ccRWmidZaJ7FzV+hRW96hGR4ZmXMj/EWi4LDumOwgNYNq2G2vbZMfvq0h+eUe4ELpQWZ68YOkXzpD8gu7+1eUJ/JC/R1ifMfSbameQZpBy24Zet7kHs14hyPHN1ZN43zDBMP3G3625Who7fSR3265/t8hwRa6Et59gMHhNN/T1ZJtF5e95+ZE4jtJcZ0oVS9lUlf2kqpqyLJTKdJ5G8W8qejwej8fj8Xg8Ho/H4/H89/wD5T8vK/un+FAAAAAASUVORK5CYII=" alt="Clouds" /><span className='second__span'>Clouds</span> {weather?.clouds.all}%</li>
              <li className='second__item'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXSV0XZ_PkXIPv4vjRMIi29NipjjRnGDvjg&usqp=CAU" alt="Pressure" /><span className='second__span'>Pressure</span> {weather?.main.pressure}hPa</li>
            </ul>
        </section>
				<h2 className='card__temperature'>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.fahrenheit} °F`}</h2>
				<button className='card__btn' onClick={changeTemperature}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
    </article>
  )
}

export default WeatherCard