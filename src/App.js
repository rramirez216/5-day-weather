import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'

import GlobalStyles from './GlobalStyles'
import WeatherCard from './components/WeatherCard'

import Clouds from './assets/Clouds.png'
import Clear from './assets/Clear.png'
import Rain from './assets/Rain.png'
import Overcast from './assets/Overcast.png'
import Snow from './assets/Snow.png'
import Thunderstorm from './assets/Thunderstorm.png'

const App = () => {
  const [zip, setZip] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [background, setBackground] = useState(null)
  const [description, setDescription] = useState(null)

  const handleSubmit = () => {
    const fetchData = async () => {
      const res = await axios(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
      setWeatherData(res.data)
      setBackground(res.data.weather[0].main)
      setDescription(res.data.weather[0].description)
      console.log(res.data)
    }
    fetchData()
  }

  const handleBackground = () => {
    if (background === 'Clouds') {
      if (description === 'overcast clouds') {
        return Overcast
      }
      return Clouds
    } else if (background === 'Rain' && background === 'Drizzle') {
      return Rain
    } else if (background === 'Snow') {
      return Snow
    } else if (background === 'Thunderstorm') {
      return Thunderstorm
    } else {
      return Clear
    }
  }

  console.log(handleBackground())

  return (
    <Wrapper main={handleBackground()}>
      <div>
        <Label htmlFor='search'>Zip Code:</Label>
        <TextInput
          type='text'
          id='search'
          placeholder='Enter Zip Code'
          onChange={(e) => setZip(e.target.value)}
        />
        <Button
          type='submit'
          onClick={() => {
            handleSubmit()
          }}
        >
          Search
        </Button>
      </div>

      {weatherData && <WeatherCard weatherData={weatherData} />}

      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 64px;
  background-image: url('${({ main }) => main}');
  background-size: cover;
  background-repeat: no-repeat;
`
const Label = styled.label`
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  margin-right: 8px;
`

const TextInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-right: 8px;
`
const Button = styled.button`
  background-color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
`

export default App
