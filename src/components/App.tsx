import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Grid from './Grid'
import Layout from './Layout'
import Timeline from './Timeline'
import React from 'react'
import Details from './Details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Grid></Grid>
      },
      {
        path: 'details/:detailsId',
        element: <Details />
      }
    ]
  }
])

const BodySwitch = (param: number) => {
  switch (param) {
    case 0:
      return <Timeline todo={'bar'} />
    case 1:
      return <Grid></Grid>
    default:
      return <div>404 Page Not Found</div>
  }
}
function App() {
  const body = 1
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    // <div className="relative overflow-hidden bg-white">
    //   <Layout>{BodySwitch(body)}</Layout>
    // </div>
  )
}

export default App
