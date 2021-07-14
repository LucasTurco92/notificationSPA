import Head from 'next/head';

const Header=()=>{
  return (
    <div>
      <Head>
        <title>title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
            rel="preload"
            href="/fonts/Cormorant-Infant/CormorantInfant-Light.ttf"
            as="CormorantInfant"
            crossOrigin=""
          />
      </Head>
    </div>
  )
}

export default Header