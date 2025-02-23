import React from 'react'
import { Link } from 'react-router-dom'

const InfoPage = () => {
  return (
    <>
      <p>Infoページです。</p>
      <Link to=".." reloadDocument>トップ</Link>
      <Link to=".." >トップ</Link>
    </>
  )
}

export default InfoPage