import './globals.css';

export const metadata = {
  title: 'Anna Myers Covington',
  description: 'Manager at Deloitte Consulting. Data & AI strategist.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
