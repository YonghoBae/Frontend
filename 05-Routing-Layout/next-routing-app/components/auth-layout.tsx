import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import MyPageMenu from '@/components/mypage-menu';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-3/12 bg-blue-500">
          <MyPageMenu />
        </div>
        <div className="w-9/12 bg-green-700">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
