type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  name: string
  active: boolean
}

const Path = ({ Icon, name, active }: Props) => {
  return (
    <a href="#" className="flex group">
      <div className="flex gap-4 items-center group-hover:bg-neutral-200 2xl:px-4 px-3 py-3 rounded-full">
        <Icon className="w-6 h-6" />
        <span className={`${active ? 'font-bold' : ''} text-[1.25rem] hidden 2xl:block`}>
          {name}
        </span>
      </div>
    </a>
  )
}

export default Path
