import Head from 'next/head'
import styled from 'styled-components'

const H1 = styled.div`
  font-size: 20px;
  font-weight: bold;
`
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Nextjs with Typescript and Tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <H1 className="text-xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://github.com/Shirshakkandel/nextjs-starter">
            Next.js Setup With Tailwindcss and typescript
          </a>
        </H1>
      </main>
    </div>
  )
}
