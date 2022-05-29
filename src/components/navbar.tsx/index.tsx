import Path from './path'
import { HomeIcon } from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <nav>
      <div className="space-y-2">
        <Path Icon={HomeIcon} name="Home" active={true}/>
        <Path Icon={HomeIcon} name="Explore" active={false}/>
        <Path Icon={HomeIcon} name="Notifications" active={false}/>
        <Path Icon={HomeIcon} name="Messages" active={false}/>
        <Path Icon={HomeIcon} name="Bookmarks" active={false}/>
        <Path Icon={HomeIcon} name="Lists" active={false}/>
        <Path Icon={HomeIcon} name="Profile" active={false}/>
        <Path Icon={HomeIcon} name="More" active={false}/>
      </div>
    </nav>
  )
}

export default Navbar
