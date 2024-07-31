import { ReactNode } from 'react'

import type { ACLObj } from 'src/configs/acl'

interface AclGuardProps {
  children: ReactNode
  authGuard?: boolean
  guestGuard?: boolean
  aclAbilities: ACLObj
}

const AclGuard = (props: AclGuardProps) => {
  const { aclAbilities, children, guestGuard = false, authGuard = true } = props
  console.log(aclAbilities, children, guestGuard, authGuard)
  
  //
  return <>{children}</>
}

export default AclGuard
