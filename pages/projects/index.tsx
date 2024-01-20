import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { getPage } from '../api/api';
import { PageContentTypes } from '../api/constants';
import { isPreviewEnabled } from '../api/preview';
import type { TypePage } from '../api/types';
import type { GetServerSideProps } from 'next';
import ErrorPage from 'next/error';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { BlockRenderer } from '../components/block-renderer';
import { Box, Container } from '@chakra-ui/react';
import { Navigation } from '../components/navigation';

const inter = Inter({ subsets: ['latin'] });

type PageProps = {
  page: TypePage;
};

export default function Index({ page }: PageProps) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage
    router.push('/');
  }, [router]);

  const { title, slug, background, body } = page.fields;
  return (
    <>
      <Head>
        <title>Nathan Spinetti Portfolio</title>
        <meta name="description" content="Nathan Spinetti is a Front-End Developer at Workhuman." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NSLogo.svg" />
      </Head>
      <main>
        <Navigation />
        <BlockRenderer block={background} />
        <BlockRenderer block={body} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
  locale,
}) => {
  const slug = String(params?.slug ?? 'projects');
  const page = await getPage({
    slug,
    locale,
    pageContentType: PageContentTypes.Page,
  });

  return {
    props: { page },
  };
};
