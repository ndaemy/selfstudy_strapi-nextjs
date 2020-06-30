import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Nav, NavItem, Container } from 'reactstrap'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const title = 'Welcome to Next.js'

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
          `}
        </style>
        <Nav className='navbar navbar-dark bg-dark'>
          <NavItem>
            <Link href='/'>
              <a className='navbar-brand'>Home</a>
            </Link>
          </NavItem>

          <NavItem className='ml-auto'>
            <Link href='/signin'>
              <a className='nav-link'>Sign In</a>
            </Link>
          </NavItem>

          <NavItem>
            <Link href='/signup'>
              <a className='nav-link'>Sign Up</a>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{children}</Container>
    </div>
  )
}
