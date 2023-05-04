import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import { getPage } from './api/api'
import { PageContentTypes } from './api/constants'
import { isPreviewEnabled } from './api/preview'
import type { TypePage } from './api/types'
import type { GetServerSideProps } from 'next'
import ErrorPage from 'next/error'
import React from 'react'
import { BlockRenderer } from './components/block-renderer'
import { Box, Container } from '@chakra-ui/react'
import { Navigation } from './components/navigation'

const inter = Inter({ subsets: ['latin'] })

type PageProps = {
  // navigation?: any;
  page: TypePage
}

export default function Index({ page }: PageProps) {
  const { title, slug, background, body } = page.fields;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Nathan Spinetti is a Front-End Developer at Workhuman." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NSLogo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
      </Head>
      <main>
        <Navigation />
        <BlockRenderer block={background} />
        <BlockRenderer block={body} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
  locale,
}) => {
  const slug = String(params?.slug ?? 'home')
  // const preview = isPreviewEnabled(query)
  // const locale = String(params?.locale ?? 'en-US');
  const page = await getPage({
    slug,
    // preview,
    locale,
    pageContentType: PageContentTypes.Page,
  })

  // const navigation = await getNavigation();

  return {
    props: { page },
    // revalidate: 10, // In seconds
  }
}
