import { User } from '../../api'

type LockAction = 'deny' | 'lock'

interface PermissionRule {
  permission: string
}

interface CustomRule {
  test: (user: User) => boolean
}

type LockRule = PermissionRule | CustomRule

interface Lock {
  action: LockAction
  rules: LockRule[]
}

export type { CustomRule, Lock, LockAction, LockRule, PermissionRule }
