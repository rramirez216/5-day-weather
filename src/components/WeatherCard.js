import React from 'react'
import styled from 'styled-components/macro'

const WeatherCard = ({ weatherData: { main, name, weather } }) => {
  return (
    <Card>
      <Name>{name}</Name>
      <Current>{main.temp}&#176;</Current>
      <p>{weather[0].description}</p>
      <Max>H: {main.temp_max}&#176;</Max>
      <Min>L: {main.temp_min}&#176;</Min>
    </Card>
  )
}

const Card = styled.div`
  width: 200px;
  height: 250px;
  background-color: white;
  padding: 24px;
  text-align: center;
  border-radius: 8px;
`
const Name = styled.div`
  font-size: 1.5rem;
`
const Current = styled.p`
  font-size: 3rem;
`
const Min = styled.p`
  display: inline-block;
`
const Max = styled(Min)`
  margin-right: 8px;
`

export default WeatherCard
