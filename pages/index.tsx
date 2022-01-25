import Head from 'next/head';
import Header from '../components/Header'
import CookieStandAdmin from '../components/CookieStandAdmin'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'


export default function Home() {

  const { user, login } =useAuth();

  async function handleLogin(username, password) {
    login(username, password);

  }

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

         {
         user ? <CookieStandAdmin /> : <LoginForm onLogin={handleLogin} /> 
         }

        </main>
        
        <Footer />
        
      </div>
    </body>
  )
}