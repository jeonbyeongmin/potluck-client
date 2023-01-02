import { ReactNode } from 'react';
import Head from 'next/head';
import Header from 'components/layouts/Header';
import { Nav } from 'components/layouts/Nav';
import { Flex } from 'components/primitive';

interface PartyLayoutProps {
  title?: string;
  children: ReactNode;
}

function PartyLayout({ children, title = 'Potluck' }: PartyLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Flex direction="row">
        <Nav />
        {children}
      </Flex>
    </>
  );
}

export default PartyLayout;