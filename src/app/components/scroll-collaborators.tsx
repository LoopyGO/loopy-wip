'use client'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { CardCollaborators } from './card-collaborators'

export function ScrollCollabs() {
  return (
    <ScrollArea.Root className="relative w-full h-full rounded-lg overflow-hidden">
      <div className="bottom-0 pointer-events-none absolute md:bottom-14 w-full h-32 bg-gradient-to-b rotate-180 to-transparent from-black" />
      <ScrollArea.Viewport className=" w-full h-full max-md:max-h-[420px]">
        <div className="grid w-full h-full md:grid-cols-2 grid-cols-1 gap-4 pb-32 pt-4 md:px-2">
          <CardCollaborators
            name="Daniel Gabriel"
            description="Idealizador do projeto e streamer na Twitch. Desenvolvedor de software e entusiasta de tecnologia."
            githubUsername="revogabe"
            twitterUsername="orevogabe"
          />
          <CardCollaborators
            name="João Pedro Magalhães"
            description="Desenvolvedor Front-End. @houseform maintainer. @radix-ui community helper."
            githubUsername="joaom00"
            twitterUsername="joaom__00"
          />
          <CardCollaborators
            name="Ariel Betti"
            description="🏆 World Champion of NASA Space Apps 🏅1º Maratona IBM Behind The Code. 🐱‍💻<>Frontend Engineer</>"
            githubUsername="ArielBetti"
          />
          <CardCollaborators
            name="Caio Gomes"
            description="Ei, eu sou Caio. Sou Engenheiro de Sofware, anteriormente na Dashlane, Qonto & Zefir. Atualmente envolvido em projetos de código aberto e aberto a novas oportunidades."
            githubUsername="caioluis"
          />
          <CardCollaborators
            name="Luiz Felipe"
            description="Desenvolvedor Front-end que ama tecnologias web e que coloca amor em tudo que faz e também um cara bem legal."
            githubUsername="meluiz"
          />
          <CardCollaborators
            name="Giovani Fernandes"
            description="Desenvolvedor web. Angular, React, Typescript, SASS, NodeJS, PostgresSQL, GraphQL, essas são algumas das linguagens que utlilizo em meus projetos / trablalho."
            githubUsername="Giovani-f"
          />
          <CardCollaborators
            name="ExpressoTS"
            description="Pensou em fazer um back-end pensou em ExpressoTS, saia imediatamente do Nest! venha para o Expresso | Framework utilizado para este projeto!"
            githubUsername="expressots"
          />
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  )
}
