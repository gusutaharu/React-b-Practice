import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <>
      <p>Aboutページです。</p>
      <button type='button' onClick={handleClick}>トップへ移動</button>
    </>
  );
}

export default AboutPage