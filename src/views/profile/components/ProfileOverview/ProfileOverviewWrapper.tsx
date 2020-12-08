import React from 'react'
import { Suspense } from '../../../../components'
import ProfileOverview, { ProfileOverviewProps } from './ProfileOverview'
import ProfileOverviewSkeleton from './ProfileOverviewSkeleton'

type ProfileOverviewWrapperProps = ProfileOverviewProps

function ProfileOverviewWrapper(props: ProfileOverviewWrapperProps) {
  return (
    <Suspense fallback={<ProfileOverviewSkeleton />}>
      <ProfileOverview {...props} />
    </Suspense>
  )
}

export default ProfileOverviewWrapper
export { ProfileOverviewWrapper }
