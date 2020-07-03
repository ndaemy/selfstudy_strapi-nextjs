import { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from '../lib/apolloClient'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
            integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
            crossOrigin='anonymous'
          />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  )
}
