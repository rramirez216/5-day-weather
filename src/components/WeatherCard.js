import React from 'react'
import styled from 'styled-components/macro'

const WeatherCard = ({ weatherData: { main, name, weather } }) => {
  return (
    <>
      <Card>
        <Name>{name}</Name>
        <Current>{main.temp}&#176;</Current>
        <p>{weather[0].description}</p>
        <MinMax>H: {main.temp_max}&#176;</MinMax>
        <MinMax>L: {main.temp_min}&#176;</MinMax>
      </Card>
    </>
  )
}

const Card = styled.div`
  width: 200px;
  height: 250px;
  /* display: flex;
  flex-flow: column nowrap;
  align-items: center; */
`
const Name = styled.div`
  font-size: 1.5rem;
`
const Current = styled.p`
  font-size: 2.5rem;
`
const MinMax = styled.p`
  display: inline-block;
`

export default WeatherCard
