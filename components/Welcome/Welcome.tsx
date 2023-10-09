import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Cargo App
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
        ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
        officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate
        dolor minim nulla est proident. Nostrud officia pariatur ut officia. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
        reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint
        cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
    </>
  );
}
