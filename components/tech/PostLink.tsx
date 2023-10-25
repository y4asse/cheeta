'use client'

import { viewHistoryAtom } from '@/jotai/viewHistory'
import { PostItem } from '@/types/postItem'
import { useAtom } from 'jotai'
import { useSession } from 'next-auth/react'
import React from 'react'

const PostLink = ({ url, image_url, isViewed }: { url: string; image_url: string; isViewed?: boolean }) => {
  const { data: session } = useSession()
  const user = session ? session.user : null
  const [, setViewHistory] = useAtom(viewHistoryAtom)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (isViewed) return
    setViewHistory((prev) => [...prev, url])
    if (!user) return
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/view?user_id=${user.id}&post_url=${url}`, {
      method: 'POST'
    })
  }
  return (
    <a href={url} onClick={handleClick}>
      <img src={image_url} alt="image" className=" border-b-2 border-[#e6e6e6] w-full aspect-[16/9]" />
    </a>
  )
}

export default PostLink