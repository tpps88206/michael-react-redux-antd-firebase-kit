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

const SignInModal = ({ visible, onCancel, showSignUpModal, onSignInWithGoogle }) => {
  const { t } = useTranslation('common');

  const handleClickSignUp = () => {
    onCancel();
    showSignUpModal();
  };

  return (
    <Modal
      centered
      visible={visible}
      onCancel={onCancel}
      footer={null}
      bodyStyle={{ textAlign: 'center', padding: 56 }}
    >
      <Title level={2}>{t('welcomeBack')}</Title>
      <SignUpContentWrapper>
        <Button shape="round" size="large" icon={<GoogleOutlined />} onClick={onSignInWithGoogle}>
          {t('signInWithGoogle')}
        </Button>
      </SignUpContentWrapper>
      <Paragraph>{t('noAccount')}</Paragraph>
      <Link onClick={handleClickSignUp}>{t('createOne')}</Link>
    </Modal>
  );
};

export default SignInModal;
