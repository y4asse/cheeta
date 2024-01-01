'use client'

import { followUser, unfollowUser } from '@/app/[id]/_actions/actions'
import { useState } from 'react'

const FollowButton = ({
  userId,
  sessionUserId,
  defaultFollow
}: {
  userId: string
  sessionUserId: string
  defaultFollow: boolean
}) => {
  const [isFollow, setIsFollow] = useState(defaultFollow)
  const handleClick = async () => {
    if (isFollow) {
      setIsFollow(false)
      const { result, error } = await unfollowUser({ userId: sessionUserId, followingUserId: userId })
      if (error) {
        setIsFollow(true)
      }
    } else {
      setIsFollow(true)
      const { result, error } = await followUser({ userId: sessionUserId, followingUserId: userId })
      if (error) {
        setIsFollow(false)
      }
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`rounded  px-3 py-1 font-semibold border transition-all duration-200 ${
        isFollow ? 'bg-[white] border-lightGray hover:bg-lightGray ' : 'bg-primary text-[white]'
      }`}
    >
      {isFollow ? 'フォロー中' : 'フォロー'}
    </button>
  )
}

export default FollowButton