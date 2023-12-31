import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link href="/">Return to Homepage</Link>
    </section>
  )
}
