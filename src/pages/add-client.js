import React from 'react';
import dynamic from 'next/dynamic';
import Page from '../layouts';

const DynamicAddClient = dynamic(import('../scenes/AddClient'), { ssr: false });

export default () => (
  <Page>
    <DynamicAddClient />
  </Page>
);
