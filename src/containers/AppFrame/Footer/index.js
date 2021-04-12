import React, { memo } from 'react';

import { Layout } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;

const FooterWrapper = styled(Footer)`
  background-color: ${props => props.theme.white};
  height: 80px;
`;

const EnhancedFooter = () => <FooterWrapper />;

export default memo(EnhancedFooter);
