import Aos from 'aos'
import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'

import 'aos/dist/aos.css'
// import { RouterProvider } from 'react-router-dom'
// import router from './Routes/Router'

function App({ children }) {
  useEffect(() => { Aos.init() }, [])
  return (

    <RouterProvider router={router} >
      {children}
    </RouterProvider>
  )
}

export default App
