import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {



  return (
    <Html lang="en">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,200" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
    <Head />

      <body className='snap snap-mandatory w-[100vw] overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
