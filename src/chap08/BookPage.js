import React from 'react'
import { useParams } from 'react-router-dom'

const BookPage = () => {
  const { isbn = '978-4-8156-0182-9'} = useParams();
  if(!/978-4-[0-9]{2,7}-[0-9]{2,7}-[0-9X]/.test(isbn)){
    throw new RangeError('ISBN is invalid!');
  }
  return (
    <p>ISBNNコード「{isbn}」のページです。</p>
  )
}

export default BookPage