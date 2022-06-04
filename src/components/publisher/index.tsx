import { ViewBoardsIcon } from '@heroicons/react/solid'
import Avatar from '../avatar'
import {
  EmojiIcon,
  GifIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
} from '../icons'
import Rune from '../rune'
import Textbox from './textbox'

const Publisher = () => {
  return (
    <section className="px-4 py-4 grid grid-cols-[auto,1fr] gap-4 ">
      <Avatar
        src="https://images.unsplash.com/photo-1614639437280-558b05b13939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Profile"
      />
      <div className="space-y-10 w-full">
        <Textbox />
        <div className="flex items-center justify-between gap-4">
          <div className="hover:bg-sky-100 p-2 rounded-full transition-colors duration-500 ease-out cursor-pointer mobile:hidden">
            <ViewBoardsIcon className="w-5 h-5 text-sky-500" />
          </div>
          <div className="mobile:flex items-center hidden ">
            <Rune
              Icon={<MediaIcon fill="fill-sky-500" />}
              color="hover:bg-sky-100"
            />
            <Rune
              Icon={<GifIcon fill="fill-sky-500" />}
              color="hover:bg-sky-100"
            />
            <Rune
              Icon={<PollIcon fill="fill-sky-500" />}
              color="hover:bg-sky-100"
            />
            <Rune
              Icon={<EmojiIcon fill="fill-sky-500" />}
              color="hover:bg-sky-100"
            />
            <Rune
              Icon={<ScheduleIcon fill="fill-sky-500" />}
              color="hover:bg-sky-100"
            />
            <Rune
              Icon={<LocationIcon fill="fill-sky-500" />}
              color="hover:bg-sky-100"
            />
          </div>
          <button className="bg-sky-500 hover:bg-sky-400 hover-transition px-5 py-2 text-white font-bold rounded-full w-full mobile:w-auto">
            Tweet
          </button>
        </div>
      </div>
    </section>
  )
}

export default Publisher
