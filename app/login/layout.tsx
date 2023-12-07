import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'ログイン | Chietta'
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
