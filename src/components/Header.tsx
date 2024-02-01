import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="flex justify-between p-3 container text-2xl">
      <h1>LOGO</h1>
      <span>USER</span>
    </header>
  );
};
