'use client'
import useSound from 'use-sound'
import clickSFX from '../../sounds/toggle-theme.mp3'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { TwitterIcon } from './twitter-icon'
import AvatarHover from './avatar-hover'

export type UserProps = {
  name: string
  description: string

  twitterUsername?: string
  githubUsername: string
}

export function CardCollaborators({
  name,
  description,
  twitterUsername,
  githubUsername,
}: UserProps) {
  const [play] = useSound(clickSFX, {
    volume: 0.2,
  })
  return (
    <div className="w-full grow border border-base-3 bg-base-1/50 text-base-1 px-5 py-2 rounded-lg duration-200 ease-out  max-md:py-3 flex gap-8 items-center justify-between">
      <div className="flex gap-4 items-center justify-start">
        <AvatarHover
          name={name}
          githubUsername={githubUsername}
          description={description}
        />
        <h1 className="font-bold text-white text-sm truncate" title={name}>
          {name}
        </h1>
      </div>
      <div className="flex items-center justify-center gap-1">
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          draggable={false}
          onPointerDown={() => play()}
          className="group md:max-w-max w-full text-base-12 hover:text-base-12 hover:bg-base-4 p-3 rounded-lg duration-200 ease-out active:scale-95 max-md:w-full max-md:text-center max-md:py-3"
          rel="noreferrer"
        >
          <GitHubLogoIcon className="w-5 h-5" />
        </a>
        <a
          href={`https://twitter.com/${twitterUsername}`}
          target="_blank"
          draggable={false}
          onPointerDown={() => play()}
          className=" md:max-w-max w-full text-[#00acee] hover:text-[#00acee] hover:bg-base-4 p-3 rounded-lg duration-200 ease-out active:scale-95 max-md:w-full max-md:text-center max-md:py-3 "
          rel="noreferrer"
        >
          <TwitterIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
