import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export default props =>
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <title>Playlister</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,800,700,900" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="static/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Playlister- Create Spotify Playlists from Radio Stations" />
      </Head>
      {props.children}
    </div>
  </ThemeProvider>
