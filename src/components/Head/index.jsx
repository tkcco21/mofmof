import React from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../../hooks/useSiteMetadata'

export const Head = ({ pathname }) => {
  const meta = useSiteMetadata()
  return (
    <Helmet defer={false} defaultTitle={meta.title} titleTemplate={`%s | ${meta.title}`}>
      <html lang="ja" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {/* ↓ちゃんと公開するときは外す */}
      {/* <meta name="robots" content="noindex" /> */}
      {/* <meta name="robots" content="nofollow" /> */}
      {/* ↑ちゃんと公開するときは外す */}

      <meta property="description" content={meta.description} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={`${meta.siteUrl}${pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:image" content={`${meta.siteUrl}/ogp.png`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={meta.social.twitter} />
      <link rel="canonical" href={`${meta.siteUrl}${pathname}`} />
      <link rel="shortcut icon" href="/ico/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/ico/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/ico/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/ico/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/ico/android-chrome-256x256.png" />
    </Helmet>
  )
}
