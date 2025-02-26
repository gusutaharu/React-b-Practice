import React from 'react'
import { useRouteError } from 'react-router-dom'

const InvalidParamsPage = () => {
  const error = useRouteError();
  return (
    <p style={{ color: 'Red'}}>{error.message}</p>
  )
}

export default InvalidParamsPage