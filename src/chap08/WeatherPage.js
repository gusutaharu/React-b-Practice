import React from 'react'
import { useLoaderData } from 'react-router-dom'

const WeatherPage = () => {
  const data = useLoaderData();
  return (
    <figure>
      <img src={`https://openweathermap.org/img/wn/${data?.weater?.[0]?.icon}.png`} alt={data?.weater?.[0]?.main} />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  )
}

export default WeatherPage