import Path from './path'
import { HomeIcon } from '@heroicons/react/solid'
import {
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ViewListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'
import Logo from './logo'
import Tweet from './tweet'
import Me from './me'

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-5 px-3 py-4 min-h-screen justify-between items-center">
      <div className='flex flex-col gap-5 items-center 2xl:items-stretch'>
        <div className="px-4">
          <Logo />
        </div>
        <div className="space-y-3">
          <Path Icon={HomeIcon} name="Home" active={true} />
          <Path Icon={HashtagIcon} name="Explore" active={false} />
          <Path Icon={BellIcon} name="Notifications" active={false} />
          <Path Icon={MailIcon} name="Messages" active={false} />
          <Path Icon={BookmarkIcon} name="Bookmarks" active={false} />
          <Path Icon={ViewListIcon} name="Lists" active={false} />
          <Path Icon={UserIcon} name="Profile" active={false} />
          <Path Icon={DotsCircleHorizontalIcon} name="More" active={false} />
        </div>
        <Tweet />
      </div>
      <Me />
    </nav>
  )
}

export default Navbar
