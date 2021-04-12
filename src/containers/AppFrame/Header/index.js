import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Col, Layout, Row, Space } from 'antd';
import firebase from 'firebase/app';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';

import SignInModal from '@/components/Modal/SignInModal';
import SignUpModal from '@/components/Modal/SignUpModal';
import { signInWith3thParty, signOut } from '@/redux/slices/auth';

const { Header } = Layout;

const HeaderWrapper = styled(Header)`
  background-color: ${props => props.theme.white};
  height: 80px;
  border-bottom: solid 1px ${props => props.theme.grey[0]};
`;

const RightColWrapper = styled(Col)`
  text-align: end;
`;

const RowWrapper = styled(Row)`
  height: 100%;
`;

const EnhancedHeader = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

  const isSignedIn = useMemo(() => !isEmpty(user), [user]);

  const showSignUpModal = () => {
    setIsSignUpModalVisible(true);
  };

  const handleSignUpModalCancel = () => {
    setIsSignUpModalVisible(false);
  };

  const showSignInModal = () => {
    setIsSignInModalVisible(true);
  };

  const handleSignInModalCancel = () => {
    setIsSignInModalVisible(false);
  };

  const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    dispatch(signInWith3thParty({ provider }));

    setIsSignUpModalVisible(false);
    setIsSignInModalVisible(false);
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      <HeaderWrapper>
        <RowWrapper align="middle">
          <Col span={12} />
          <RightColWrapper span={12}>
            <Space align="center">
              {isSignedIn ? (
                <Button type="text" onClick={handleSignOut}>
                  {t('signOut')}
                </Button>
              ) : (
                <>
                  <Button type="text" onClick={showSignInModal}>
                    {t('signIn')}
                  </Button>
                  <Button type="primary" onClick={showSignUpModal}>
                    {t('signUp')}
                  </Button>
                </>
              )}
            </Space>
          </RightColWrapper>
        </RowWrapper>
      </HeaderWrapper>
      <SignInModal
        visible={isSignInModalVisible}
        onCancel={handleSignInModalCancel}
        showSignUpModal={showSignUpModal}
        onSignInWithGoogle={handleSignInWithGoogle}
      />
      <SignUpModal
        visible={isSignUpModalVisible}
        onCancel={handleSignUpModalCancel}
        showSignInModal={showSignInModal}
        onSignInWithGoogle={handleSignInWithGoogle}
      />
    </>
  );
};

export default EnhancedHeader;
