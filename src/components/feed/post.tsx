import { DotsHorizontalIcon } from '@heroicons/react/solid'
import Avatar from '../avatar'
import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from '../icons'
import Rune from '../rune'

const Post = () => {
  return (
    <div className="border-t-[1px] px-4 pt-3 pb-2">
      <div className="grid grid-cols-[auto,1fr] gap-3">
        <Avatar
          src="https://images.unsplash.com/photo-1614639437280-558b05b13939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Profile"
        />
        <div>
          <div className="flex gap-1">
            <h1 className="font-bold">Matt Pocock</h1>
            <h2 className="text-neutral-500">@mattpocockuk</h2>
            <span className="text-neutral-500">•</span>
            <h2 className="text-neutral-500">4h</h2>
            <DotsHorizontalIcon className="w-4 h-4 ml-auto text-neutral-400" />
          </div>
          <p>
            quibusdam veniam dolores, pariatur vitae quam accusamus modi
            Nostrum, cupiditate natus!
          </p>

          <div className="flex justify-between mt-3 max-w-md">
            <Rune
              Icon={<ReplyIcon color="#0EA5E9" />}
              color="hover:bg-sky-100"
            />
            <Rune
              Icon={<RetweetIcon color="#22C55E" />}
              color="hover:bg-green-100"
            />
            <Rune
              Icon={<LikeIcon color="#F43F5E" />}
              color="hover:bg-rose-100"
            />
            <Rune
              Icon={<ShareIcon color="#0EA5E9" />}
              color="hover:bg-sky-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
