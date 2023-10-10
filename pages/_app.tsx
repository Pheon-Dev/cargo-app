import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Button, Group, MantineProvider, Text, Title } from '@mantine/core';
import { theme } from '../theme';
import { AppShell, Burger, Grid, Skeleton, rem } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

export default function App({ Component, pageProps }: AppProps) {
  const pinned = useHeadroom({ fixedAt: 120 });
  return (
    <MantineProvider theme={theme}>
      <AppShell
        withBorder={true}
        header={{ height: 60, collapsed: !pinned, offset: false }}
        padding="md"
      >
        <AppShell.Header>
          <Grid justify="flex-start" align="stretch">
            <Grid.Col span={7} style={{ minHeight: rem(80) }}>
              <Title order={2}>Cargo App</Title>
            </Grid.Col>
            <Group>
              <Button variant="subtle">Home</Button>
              <Button variant="subtle">Products</Button>
              <Button variant="subtle">Company</Button>
              <Button variant="subtle">Resources</Button>
              <Button variant="filled">Contact Us</Button>
            </Group>
          </Grid>
        </AppShell.Header>
        {/* <AppShell.Navbar>Navbar</AppShell.Navbar> */}
        <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
          <Head>
            <title>Cargo App</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
            <link rel="shortcut icon" href="/favicon.svg" />
          </Head>

          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
