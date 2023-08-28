import Link from 'next/link'
import { DrillBitLogo } from '../../public/assets'

export default function Home() {
  return (
    <main>
      <Link href="/login">Login</Link>
      <h1>Welcome to drillbit plagiarism check B2C</h1>
      <DrillBitLogo />
    </main>
  )
}
