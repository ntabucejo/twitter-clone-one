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
    <section className="px-4 py-4 flex gap-4 ">
      <Avatar
        src="https://images.unsplash.com/photo-1614639437280-558b05b13939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Profile"
      />
      <div className="space-y-10 w-full">
        <Textbox />
        <div className="flex items-center justify-between">
          <div className="flex ">
            <Rune
              Icon={<MediaIcon color="#0EA5E9" />}
              color="hover:bg-sky-100"
            />
            <Rune Icon={<GifIcon color="#0EA5E9" />} color="hover:bg-sky-100" />
            <Rune
              Icon={<PollIcon color="#0EA5E9" />}
              color="hover:bg-sky-100"
            />
            <Rune
              Icon={<EmojiIcon color="#0EA5E9" />}
              color="hover:bg-sky-100"
            />
            <Rune
              Icon={<ScheduleIcon color="#0EA5E9" />}
              color="hover:bg-sky-100"
            />
            <Rune
              Icon={<LocationIcon color="#0EA5E9" />}
              color="hover:bg-sky-100"
            />
          </div>
          <button className="bg-sky-500 px-5 py-2 text-white font-bold rounded-full">
            Tweet
          </button>
        </div>
      </div>
    </section>
  )
}

export default Publisher
