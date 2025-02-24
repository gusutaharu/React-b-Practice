import React from 'react'
import { useParams } from 'react-router-dom'

const BookPage = () => {
  const { isbn = '978-4-8156-0182-9'} = useParams();
  return (
    <p>ISBNNコード「{isbn}」のページです。</p>
  )
}

export default BookPage