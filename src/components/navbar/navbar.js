import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>Snappy</div>
      <div>
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/posts">Posts</Link>
      </div>
    </nav>
  )
}
