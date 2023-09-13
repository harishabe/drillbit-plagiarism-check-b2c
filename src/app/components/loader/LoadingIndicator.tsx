'use client'

import React from 'react'
import { DrillBitSymbolLogo } from 'public/assets'
import BeatLoader from 'react-spinners/BeatLoader'

import './loading.scss'

const LoadingIndicator = () => {
  return (
    <div className="page-loading">
      <div className="loaderContainer">
        <div className="loaderWrapper">
          <div className="logoContainer">
            <DrillBitSymbolLogo />
          </div>
          <div className="beatContainer">
            <BeatLoader size={12} color="#3672FF" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingIndicator
