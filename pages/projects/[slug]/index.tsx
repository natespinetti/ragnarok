import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import { getPage } from '../../api/api'
import { PageContentTypes } from '../../api/constants'
import { isPreviewEnabled } from '../../api/preview'
import type { TypePage } from '../../api/types'
import type { GetServerSideProps } from 'next'
import ErrorPage from 'next/error'
import React from 'react'
import { BlockRenderer } from '../../components/block-renderer'
import { Box } from '@chakra-ui/react'
import { Navigation } from '../../components/navigation'

const inter = Inter({ subsets: ['latin'] })

type PageProps = {
  // navigation?: any;
  page: TypePage
}

export default function Index({ page }: PageProps) {
  const { title, slug, hero, card, background } = page.fields;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Nathan Spinetti is a Front-End Developer at Workhuman." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NSLogo.svg" />
      </Head>
      <main>
        <Navigation />
        <BlockRenderer block={background} />
        <BlockRenderer block={hero} />
        <BlockRenderer block={card} />
        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
  locale,
}) => {
  const slug = String(params?.slug ?? '')
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
