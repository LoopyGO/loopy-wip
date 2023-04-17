import React from 'react'
import * as HoverCard from '@radix-ui/react-hover-card'
import Image from 'next/image'
import { UserProps } from './card-collaborators'

const AvatarHover = ({ name, description, githubUsername }: UserProps) => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <a
        className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
        href={`https://github.com/${githubUsername}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image
          width={45}
          height={45}
          className="block h-[45px] w-[45px] rounded-full"
          src={`https://github.com/${githubUsername}.png`}
          alt={`Avatar do ${name}`}
        />
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        collisionPadding={16}
        className="z-40 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] border border-base-5 rounded-md bg-gradient-to-b to-black from-base-1/50 backdrop-blur-lg p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex flex-col gap-[7px]">
          <Image
            width={45}
            height={45}
            className="block h-[60px] w-[60px] rounded-full"
            src={`https://github.com/${githubUsername}.png`}
            alt={`Avatar do ${name}`}
          />
          <div className="flex flex-col gap-[15px]">
            <div>
              <div className="text-white m-0 text-[15px] font-medium leading-[1.5]">
                {name}
              </div>
              <div className="text-white/50 m-0 text-[15px] leading-[1.5]">
                @{githubUsername}
              </div>
            </div>
            <div className="text-white/75 m-0 text-[15px] leading-[1.5]">
              {description}
            </div>
          </div>
        </div>

        <HoverCard.Arrow className="fill-base-6" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
)

export default AvatarHover
