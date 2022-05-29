type Props = {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main>
      <div className="grid grid-cols-[1fr,auto] min-h-screen">{children}</div>
    </main>
  )
}

export default Main
