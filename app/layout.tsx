import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
