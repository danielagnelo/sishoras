import React from 'react'
import Header from '../Header/Header'
import MainStyle from './MainStyle'

export default function Main(props) {
  return (
    <MainStyle>
      <Header {...props} />
      <main className="content container-fluid">
        <div className="p-3 mt-3">
          {props.children}
        </div>
      </main>
    </MainStyle>
  )
}
