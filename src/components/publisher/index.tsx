import { ViewBoardsIcon } from '@heroicons/react/solid'
import Avatar from '../avatar'
import Actions from './actions'
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
          <Actions />
        </div>
      </div>
    </section>
  )
}

export default Publisher
