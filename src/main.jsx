import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AuthContext from './components/AuthContext.jsx'
import Navbar from './components/Navbar.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsOfService from './components/TermsOfService.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/home',
        element: <ProtectedRoute><Navbar /><Home /><Footer /></ProtectedRoute>
      },
      {
        path: '/features',
        element: <Features />
      },
      {
        path: '/pricing',
        element: <Pricing />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>,
)
