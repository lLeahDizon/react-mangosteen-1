import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { RedirectToWelcome1 } from '../components/RedirectToWelcome1'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <RedirectToWelcome1/>,
    children: [
      welcomeRoutes,
    ],
  },
])
