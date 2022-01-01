import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import GlobalStyles from './GlobalStyles'
import WeatherCard from './components/WeatherCard'

const App = () => {
  const [zip, setZip] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  const handleSubmit = () => {
    const fetchData = async () => {
      const res = await axios(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
      setWeatherData(res.data)
      console.log(res.data)
    }
    fetchData()
  }

  return (
    <Wrapper>
      <div>
        <label htmlFor='search'>Zip Code:</label>
        <input
          type='text'
          id='search'
          placeholder='Enter Zip Code'
          onChange={(e) => setZip(e.target.value)}
        />
        <button
          type='submit'
          onClick={() => {
            handleSubmit()
          }}
        >
          Search
        </button>
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
  background-image: url('https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1628&q=80');
`

export default App
