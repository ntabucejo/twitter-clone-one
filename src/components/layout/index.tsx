import Header from './header'
import Main from './main'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="grid-cols-[auto,1fr] desktop:max-w-7xl laptop:max-w-5xl mobile:max-w-6xl max-w-2xl mx-auto">
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
