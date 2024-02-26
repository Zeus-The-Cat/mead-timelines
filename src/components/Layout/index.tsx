export default function Layout({ children }) {
  return (
    <div className="flex w-full flex-col">
      <header>Mead Tracker App</header>
      <main>{children}</main>
    </div>
  )
}
