'use client'

import { Toaster } from 'react-hot-toast'
import { useTheme } from 'next-themes'

const ToastProvider = () => {
  const { theme } = useTheme()

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 2800,
        style: {
          background: theme === 'dark' ? '#18181b' : '#ffffff',
          color: theme === 'dark' ? '#ffffff' : '#18181b',
          border: `1px solid ${theme === 'dark' ? '#27272a' : '#e4e4e7'}`,
        },
        success: {
          style: {
            background: theme === 'dark' ? '#18181b' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#18181b',
          },
          iconTheme: {
            primary: '#10b981',
            secondary: theme === 'dark' ? '#18181b' : '#ffffff',
          },
        },
        error: {
          style: {
            background: theme === 'dark' ? '#18181b' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#18181b',
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: theme === 'dark' ? '#18181b' : '#ffffff',
          },
        },
      }}
    />
  )
}

export default ToastProvider