import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

export interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default React.memo(Layout);
