import Head from 'next/head';
import Header from '../components/Header'
import InputForm from '../components/InputForm'
import Report from '../components/Report'
import Footer from '../components/Footer'
import { passThroughSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';

export default function Home() {

  return (
    <body className="bg-green-100">
      <div className="flex flex-col h-screen">
        <Head>
          <title>
            Cookie Admin Site
          </title>
        </Head>

        
        <Header />
        <main className="flex-1 p-5 text-center overlow-y-auto">
        <InputForm /><br></br>
        <Report />
        </main>
        
        <Footer />
        
        
      </div>
    </body>
  )
}