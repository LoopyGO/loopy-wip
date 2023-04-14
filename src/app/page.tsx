import Image from 'next/image'
import { Browser } from './components/browser'
import Assinatura from '../../public/ass.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container p-6 mx-auto w-full flex items-center justify-center h-full">
      <div className="max-w-4xl w-full h-full md:h-[460px] relative">
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
