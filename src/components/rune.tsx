type Props = {
  Icon: React.ReactNode
  color: string
}

const Rune = ({ Icon, color }: Props) => {
  return (
    <div
      className={`${color} w-9 h-9 p-2 rounded-full transition-colors duration-500 ease-out cursor-pointer`}>
      {Icon}
    </div>
  )
}
export default Rune
