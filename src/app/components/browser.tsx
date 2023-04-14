'use client'
import useSound from 'use-sound'
import clickSFX from '../../sounds/toggle-theme.mp3'

export function Browser() {
  const [play] = useSound(clickSFX, {
    volume: 0.2,
  })

  return (
    <>
      <div className="relative z-20 flex w-full h-full flex-col overflow-scroll bg-gradient-to-b from-base-6/20 backdrop-blur-md to-base-1/10 border border-base-4/50 rounded-xl browser shadow-[0_8px_32px_4px] shadow-black/40">
        <div className="flex flex-col gap-10 max-md:gap-5 w-full h-full justify-center items-center px-24 max-md:p-8">
          <div className="flex w-full items-center justify-between flex-wrap gap-8">
            <div>
              <h1 className="text-6xl font-extrabold w-full relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-base-12 to-base-12">
                  Loopy
                </span>{' '}
                <span className="bg-rose-500 -right-6 -rotate-12 absolute p-1.5 rounded-md text-sm text-white ">
                  GO
                </span>
                <span className="bg-rose-500 h-8 w-8 -left-2 top-8 -z-10 -rotate-12 absolute p-1.5 rounded-md text-sm text-white " />
              </h1>
            </div>
            <button
              onPointerDown={() => play()}
              className="border border-base-3 bg-base-1/50 text-base-11 hover:text-base-12 hover:bg-base-4 px-5 py-2 rounded-lg duration-200 ease-out active:scale-95 max-md:w-full"
              rel="noreferrer"
            >
              🚧 Desenvolvimento
            </button>
          </div>
          <p className="text-base-12 text-base font-normal text-left">
            Loopy é uma plataforma de aprendizado gamificado sobre programação,
            inspirada no estilo do Duolingo, que foi desenvolvida com base nas
            ideias e feedback da comunidade da live do revogabe.
            <br />
            <br />
            Seu objetivo é tornar o aprendizado de programação mais divertido e
            engajante para os usuários, fornecendo uma experiência interativa e
            envolvente. Além disso, o projeto é totalmente open source, o que
            significa que a comunidade pode contribuir para o seu
            desenvolvimento e aprimoramento.
          </p>
          <div className="w-full flex flex-wrap items-center justify-center gap-6 mt-3">
            <a
              href="https://github.com/Loopy-Learn/loopy-web"
              target="_blank"
              draggable={false}
              onPointerDown={() => play()}
              className="md:max-w-max w-full grow border border-base-3 bg-base-1/50 text-base-11 hover:text-base-12 hover:bg-base-4 px-5 py-2 rounded-lg duration-200 ease-out active:scale-95 max-md:w-full max-md:text-center max-md:py-3"
              rel="noreferrer"
            >
              👻 GitHub
            </a>
            <a
              href="https://discord.gg/GdYDEbw7Vv"
              target="_blank"
              draggable={false}
              onPointerDown={() => play()}
              className="md:max-w-max w-full grow border border-base-3 bg-base-1/50 text-base-11 hover:text-base-12 hover:bg-base-4 px-5 py-2 rounded-lg duration-200 ease-out active:scale-95 max-md:w-full max-md:text-center max-md:py-3"
              rel="noreferrer"
            >
              🛸 Discord
            </a>
            <a
              href="https://www.twitch.tv/revogabe"
              target="_blank"
              draggable={false}
              onPointerDown={() => play()}
              className="md:max-w-max w-full grow border border-base-3 bg-base-1/50 text-base-11 hover:text-base-12 hover:bg-base-4 px-5 py-2 rounded-lg duration-200 ease-out active:scale-95 max-md:w-full max-md:text-center max-md:py-3"
              rel="noreferrer"
            >
              📺 Twitch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 mx-auto w-[70%] bottom-0 h-[5px] bg-gradient-to-r from-base-10/5 via-base-10/40 to-base-10/5 z-[-10] rounded-xl max-md:hidden" />
    </>
  )
}
