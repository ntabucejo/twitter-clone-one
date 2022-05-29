type Props = {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main>
      <div className="flex desktop:ml-72 ml-20 min-h-screen">{children}</div>
    </main>
  )
}

export default Main
