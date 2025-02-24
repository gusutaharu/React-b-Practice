import React from 'react'
import { useParams } from 'react-router-dom'

const SearchPage = () => {
  const { '*' : keywords } = useParams();
  return (
    <p>検索ワード「{keywords}」のページです。</p>
  )
}

export default SearchPage