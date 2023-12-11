'use client'

import { User } from '@prisma/client'
import { User as SessionUser } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'

const Profile = ({ user, sessionUser }: { user: User; sessionUser: SessionUser | null }) => {
  return (
    <div className="max-w-[800px] w-full mx-auto flex flex-wrap p-3 mb-5 gap-5">
      <img
        src={user.image!}
        alt="ユーザアイコン"
        className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full mx-auto border border-[#afafaf]"
      />
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="mt-5 text-gray">{user.introduction ?? '自己紹介がありません'}</p>
        {sessionUser && user.id === sessionUser.id && (
          <div className="mt-5">
            <Link href="/settings/profile" className="rounded bg-primary text-[white] px-3 py-1 font-semibold">
              プロフィールを編集
            </Link>
          </div>
        )}
        <div className="flex gap-5 mt-5 text-2xl text-gray">
          {user.github && (
            <a target="blank" href={`https://github.com/${user.github}`}>
              <FaGithub />
            </a>
          )}
          {user.x && (
            <a target="blank" href={`https://x.com/${user.x}`}>
              <FaXTwitter />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
