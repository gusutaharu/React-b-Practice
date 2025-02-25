import React from 'react'
import { useSearchParams } from 'react-router-dom'

const BookQueryPage = () => {
  const [params, setParams] = useSearchParams(
    { isbn: '978-4-8156-0182-9' })
  return (
    <p>ISBNNコード「{params.get('isbn')}」のページです。</p>
  )
}

export default BookQueryPage