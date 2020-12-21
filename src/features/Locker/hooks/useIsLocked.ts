import { Feature, featureLockMap } from '../mapping'
import { useCurrentUser } from '../../../hooks'
import { useMemo } from 'react'
import { LockAction, CustomRule } from '../types'

function isCustomRule(rule: any): rule is CustomRule {
  return Boolean((rule as CustomRule).test)
}

function useIsLocked(feature: Feature) {
  const user = useCurrentUser()

  return useMemo<[boolean, LockAction]>(() => {
    const isAvailable = featureLockMap[feature].rules.some(rule => {
      if (isCustomRule(rule) && user) {
        return rule.test(user)
      }

      return true
    })

    return [!isAvailable, featureLockMap[feature].action]
  }, [user, feature])
}

export { useIsLocked }
