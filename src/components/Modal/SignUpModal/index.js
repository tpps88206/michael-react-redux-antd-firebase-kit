import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Modal, Typography } from 'antd';
import styled from 'styled-components';

import { GoogleOutlined } from '@ant-design/icons';

const { Title, Paragraph, Link } = Typography;

const SignUpContentWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const SignUpModal = ({ visible, onCancel, showSignInModal, onSignInWithGoogle }) => {
  const { t } = useTranslation('common');

  const handleClickSignIn = () => {
    onCancel();
    showSignInModal();
  };

  return (
    <Modal
      centered
      visible={visible}
      onCancel={onCancel}
      footer={null}
      bodyStyle={{ textAlign: 'center', padding: 56 }}
    >
      <Title level={2}>{t('joinUs')}</Title>
      <SignUpContentWrapper>
        <Button shape="round" size="large" icon={<GoogleOutlined />} onClick={onSignInWithGoogle}>
          {t('signUpWithGoogle')}
        </Button>
      </SignUpContentWrapper>
      <Paragraph>{t('alreadyHaveAnAccount')}</Paragraph>
      <Link onClick={handleClickSignIn}>{t('signIn')}</Link>
    </Modal>
  );
};

export default SignUpModal;
