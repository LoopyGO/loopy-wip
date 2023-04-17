import Image from 'next/image'
import { Browser } from '../components/browser-collaborators'
import Assinatura from '../../../public/ass.svg'
import Link from 'next/link'

export default function Collaborators() {
  return (
    <main className="container p-6 mx-auto w-full min-h-screen flex items-center justify-center h-full relative">
      <div className="absolute top-0 max-md:w-full m-8">
        <Link
          href="/"
          draggable={false}
          className=" m-8 md:max-w-max w-full border border-base-3 bg-base-1/50 text-base-11 hover:text-base-12 hover:bg-base-4 px-5 py-2 rounded-lg duration-200 ease-out active:scale-95 max-md:w-full max-md:text-center max-md:py-3"
          rel="noreferrer"
        >
          🏠 Home
        </Link>
      </div>
      <div className="max-w-4xl w-full h-full md:h-[560px] relative">
        <Browser />
        <Link
          draggable={false}
          href="https://www.linkedin.com/in/daniel-gabriel-70a565267/"
          target="_blank"
          className="w-full md:mt-20 mt-8 items-center justify-center flex"
        >
          <Image
            src={Assinatura}
            alt=""
            width={240}
            height={240}
            draggable={false}
            className="text-white"
          />
        </Link>
      </div>
    </main>
  )
}
