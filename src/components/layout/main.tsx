type Props = {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main>
      <div className="grid mobile:grid-cols-[37.5rem,auto] desktop:ml-72 ml-20 min-h-screen">
        {children}
      </div>
    </main>
  )
}

export default Main
