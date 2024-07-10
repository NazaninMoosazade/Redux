import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {

 const router = useRoutes(routes);

  return (
    <>
    <Header/>
    <div class="container px-0">
        <main class="main">
          <div class="row justify-content-between mx-0">
          <Sidebar/>
          
          {router}
          </div>
        </main>
      </div>
    </>
  )
}
