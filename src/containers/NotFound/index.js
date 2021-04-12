import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const NotFound = ({ redirect }) => {
  const history = useHistory();

  useEffect(() => {
    if (redirect) {
      history.replace(redirect);
    }
  }, []);

  return (
    <div>
      <Title level={5}>Page Not Found</Title>
      {redirect && <Paragraph>Redirecting...</Paragraph>}
    </div>
  );
};

export default NotFound;
