import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="block bunch">
      <Image src="/images/logo.png" width={50} height={50} alt="block bunch" />
    </Link>
  )
}
