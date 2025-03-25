export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="hero bg-base-200 min-h-screen">{children}</div>
}
