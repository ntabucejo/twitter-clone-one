import { EmojiIcon, GifIcon, LocationIcon, MediaIcon, PollIcon, ScheduleIcon } from '../icons'
import Rune from '../rune'

const Actions = () => {
  return (
    <>
      <div className="mobile:flex items-center hidden ">
        <Rune
          Icon={<MediaIcon fill="fill-sky-500" />}
          color="hover:bg-sky-100"
        />
        <Rune Icon={<GifIcon fill="fill-sky-500" />} color="hover:bg-sky-100" />
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
    </>
  )
}

export default Actions
