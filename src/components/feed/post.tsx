import { DotsHorizontalIcon } from '@heroicons/react/solid'
import Avatar from '../avatar'
import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from '../icons'
import PostType from '../library/types/post'
import Rune from '../rune'

type Props = {
  post: PostType
}

const Post = ({ post }: Props) => {
  return (
    <div className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
      <div className="grid grid-cols-[auto,1fr] gap-3">
        <Avatar src={post.image} alt={post.username} />
        <div>
          <div className="flex gap-1">
            <h1 className="font-bold">{post.name}</h1>
            <h2 className="text-neutral-500">@{post.username}</h2>
            <span className="text-neutral-500">•</span>
            <h2 className="text-neutral-500">{post.time}</h2>
            <div className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
              <DotsHorizontalIcon className="w-4 h-4 text-neutral-400 group-hover:text-sky-500" />
            </div>
          </div>
          <p>{post.caption}</p>

          <div className="flex justify-between mt-3 max-w-md cursor-pointer">
            <div className="flex gap-1 items-center group pr-4">
              <Rune
                Icon={<ReplyIcon fill="group-hover:fill-sky-500" />}
                color="group-hover:bg-sky-100"
              />
              <p className="text-xs group-hover:text-sky-500">{post.replies}</p>
            </div>
            <div className="flex gap-1 items-center group px-4">
              <Rune
                Icon={<RetweetIcon fill="group-hover:fill-green-500" />}
                color="group-hover:bg-green-100"
              />
              <p className="text-xs group-hover:text-green-500">
                {post.retweets}
              </p>
            </div>
            <div className="flex gap-1 items-center group px-4">
              <Rune
                Icon={<LikeIcon fill="group-hover:fill-rose-500" />}
                color="group-hover:bg-rose-100"
              />
              <p className="text-xs group-hover:text-rose-500">{post.likes}</p>
            </div>
            <div className="flex gap-1 items-center group pl-4">
              <Rune
                Icon={<ShareIcon fill="group-hover:fill-sky-500" />}
                color="group-hover:bg-sky-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
