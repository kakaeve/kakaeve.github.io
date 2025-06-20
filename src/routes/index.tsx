import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '/Profile',
        element: <Profile />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
