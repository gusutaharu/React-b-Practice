import React from 'react'
import { useLocation } from 'react-router-dom';

const BookStatePage = () => {
  const { state: isbn = '978-4-8156-0182-9' } = useLocation();
  return (
    <>
      <p>ISBNNコード「{isbn}」のページです。</p>
    </>
  )
}

export default BookStatePage