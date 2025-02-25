import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RouterParam = () => {
  return (
    <>
      <ul>
        <li><NavLink to="/">トップ</NavLink></li>
        <li><NavLink to="/book/978-4-8156-1336-5">
        これからはじめるVue.js 3実戦入門</NavLink></li>
        <li><NavLink to="/bookQuery?isbn=978-4-8156-1336-5">
        これからはじめるVue.js 3実戦入門(クエリ版)</NavLink></li>
        <li><NavLink to="/bookState" state='978-4-8156-1336-5'>
        これからはじめるVue.js 3実戦入門(state版)</NavLink></li>
        <li><NavLink to="/book/978-4-297-13288-0">
        改訂3版 JavaScript本格入門</NavLink></li>
        <li><NavLink to="/book" end>規定の書籍</NavLink></li>
        <li><NavLink to="/search/react/router/remix">検索結果</NavLink></li>
        <li><NavLink to="/nothing/foo/bar">存在しないページ</NavLink></li>
      </ul>
      <hr />
      <Outlet />
    </>
  )
}

export default RouterParam