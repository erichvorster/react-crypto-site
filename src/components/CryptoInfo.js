import React from 'react'
import { useParams } from 'react-router-dom'

const CryptoInfo = () => {
  const {coinId} = useParams()

  return (
    <div>CryptoInfo {coinId}</div>
  )
}

export default CryptoInfo