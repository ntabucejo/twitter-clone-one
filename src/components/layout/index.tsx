import Header from './header'
import Main from './main'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-[auto,1fr] max-w-7xl mx-auto">
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
