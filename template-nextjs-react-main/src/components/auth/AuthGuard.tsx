// ** React Imports
import { ReactNode, ReactElement } from 'react'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children, fallback } = props
  console.log(children, fallback)
  // ** Render
  return(
    <>
      {children}
    </>
  ) 
}

export default AuthGuard
