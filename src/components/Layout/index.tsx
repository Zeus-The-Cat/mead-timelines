import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex w-full flex-col">
      <header className="px-5 py-2">
        <Link to="/">Mead Tracker App</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
