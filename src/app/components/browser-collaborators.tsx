import { ScrollCollabs } from './scroll-collaborators'

export function Browser() {
  return (
    <>
      <div className="relative z-20 flex w-full h-full flex-col overflow-scroll bg-gradient-to-b from-base-6/20 backdrop-blur-md to-base-1/10 border border-base-4/50 rounded-xl browser">
        <div className="flex flex-col gap-4 max-md:gap-2 w-full h-full justify-start items-start p-12 max-md:p-8">
          <div className="flex flex-col gap-1 max-w-lg">
            <h1 className="font-bold text-3xl text-white">
              Nossos Colaboradores
            </h1>
            <p className="text-base text-gray-400">
              Nesta página você pode ver todos os colaboradores que estão
              ajudando ou ajudaram o nosso projeto de alguma forma.
            </p>
          </div>
          <div className="w-full h-full">
            <ScrollCollabs />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 mx-auto w-[70%] bottom-0 h-[5px] bg-gradient-to-r from-base-10/5 via-base-10/40 to-base-10/5 z-[-10] rounded-xl max-md:hidden" />
    </>
  )
}
