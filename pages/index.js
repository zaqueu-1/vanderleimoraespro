import Head from 'next/head'
import Header from './components/Header'
import Links from './components/Links'
import Bio from './components/Bio'
import Bg from './components/Bg'
import Patients from './components/Patients'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vanderlei Moraes</title>
        <meta name="description" content="Vanderlei Moraes | Consultoria Esportiva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Bg />
        <Header />
        <Links />
        <Bio />
        <Patients />
      </main>

    </div>
  )
}
