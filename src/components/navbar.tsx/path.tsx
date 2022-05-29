type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  name: string
  active: boolean
}

const Path = ({ Icon, name, active }: Props) => {
  return (
    <a href="#" className="flex group">
      <div className="flex gap-2 items-center group-hover:bg-neutral-200 px-4 py-2  rounded-full">
        <Icon className="w-8 h-8" />
        <span className={`${active ? 'font-bold' : ''} text-[1.25rem] `}>
          {name}
        </span>
      </div>
    </a>
  )
}

export default Path
