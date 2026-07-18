export const metadata = {
  title: 'GAISB',
  description: 'Automated staffing platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer>
          <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
        </footer>
      </body>
    </html>
  );
}
