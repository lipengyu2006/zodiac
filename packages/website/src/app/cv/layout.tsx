import localFont from 'next/font/local'

const notoSansSC = localFont({
  src: [
    {
      path: '../../../public/fonts/NotoSansSC-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/NotoSansSC-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${notoSansSC.className} min-h-screen overflow-hidden`}>
      {children}
    </div>
  )
}
