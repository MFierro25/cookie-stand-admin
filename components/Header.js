import Link from 'next/link'
import { useAuth } from '../contexts/auth'


export default function Header() {

    const {user, logout} = useAuth()

    return (
      <header className="flex items-center justify-between p-3 text-left text-black bg-green-500">
        <h1>Cookie Stand Admin</h1>
        <Link href="/overview" >
          <a className = 'px-2 text-black rounded-md bg-emerald-600 '>Overview</a>
        </Link>
        {
         user ? <button className = 'px-2 text-black rounded-md bg-emerald-600' onClick={logout}> Sign Off </button> : "" 
         }
        
      </header>
    )
  }