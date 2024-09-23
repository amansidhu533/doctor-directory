import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
      Doctor's Directory ©2024 Created by Amandip Kaur Sidhu
    </AntFooter>
  );
};

export default Footer;
