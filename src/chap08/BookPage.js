import React from 'react'
import { useParams } from 'react-router-dom'

const BookPage = () => {
  const pararms = useParams();
  return (
    <p>ISBNNコード「{pararms.isbn}」のページです。</p>
  )
}

export default BookPage