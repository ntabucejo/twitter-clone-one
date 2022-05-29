type Props = {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main>
      <div className="grid laptop:grid-cols-[37.5rem,auto] mobile:grid-cols-[1fr,auto] gap-5 min-h-screen">{children}</div>
    </main>
  )
}

export default Main
