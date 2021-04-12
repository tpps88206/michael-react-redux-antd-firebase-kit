import React from 'react';

import { Layout } from 'antd';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';

const { Content } = Layout;

const MainLayoutWrapper = styled(Layout)`
  background-color: ${props => props.theme.white};
  min-height: calc(100vh - 160px);
`;

const ContentWrapper = styled(Content)`
  padding: 40px 50px;
`;

const AppFrame = ({ children, hasSider = false }) => (
  <Layout>
    <Header />
    <MainLayoutWrapper>
      {hasSider && <Sider />}
      <ContentWrapper>{children}</ContentWrapper>
    </MainLayoutWrapper>
    <Footer />
  </Layout>
);

export default AppFrame;
