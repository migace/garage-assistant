import React from 'react';
import dynamic from 'next/dynamic';
import Page from '../layouts';

const DynamicAddOrder = dynamic(import('../components/containers/AddOrder'), { ssr: false });

export default () => (
  <Page>
    <DynamicAddOrder />
  </Page>
);
