import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "../../icons"
import Rune from "../../rune"

type Props = {
  replies: number,
  retweets: number,
  likes: number
}

const Actions = ({ replies, retweets, likes}: Props) => {
  return (
    <div className="flex justify-between mt-3 max-w-md cursor-pointer">
      <div className="flex items-center group tablet:pr-4">
        <Rune
          Icon={<ReplyIcon fill="group-hover:fill-sky-500" />}
          color="group-hover:bg-sky-100"
        />
        <p className="text-xs group-hover:text-sky-500">{replies}</p>
      </div>
      <div className="flex gap-1 items-center group tabletpx-4">
        <Rune
          Icon={<RetweetIcon fill="group-hover:fill-green-500" />}
          color="group-hover:bg-green-100"
        />
        <p className="text-xs group-hover:text-green-500">{retweets}</p>
      </div>
      <div className="flex gap-1 items-center group tabletpx-4">
        <Rune
          Icon={<LikeIcon fill="group-hover:fill-rose-500" />}
          color="group-hover:bg-rose-100"
        />
        <p className="text-xs group-hover:text-rose-500">{likes}</p>
      </div>
      <div className="flex gap-1 items-center group tabletpl-4">
        <Rune
          Icon={<ShareIcon fill="group-hover:fill-sky-500" />}
          color="group-hover:bg-sky-100"
        />
      </div>
    </div>
  )
}

export default Actions
