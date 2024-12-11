export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header>Header</header>
        <div className="flex flex-1 flex-col sm:flex-row">
          <main className="flex-1">{children}</main>
          <nav className="order-first sm:w-48">Sidebar</nav>
          <aside className="sm:w-48">Right Sidebar</aside>
        </div>
        <footer>Footer</footer>
      </div>
    </>
  )
}
