import type React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const RedirectToWelcome1: React.FC = () => {
  const nav = useNavigate()
  useEffect(() => {
    nav('/welcome/1')
  }, [])
  return null
}
