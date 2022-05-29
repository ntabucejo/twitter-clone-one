type Props = {
  src: string
  alt: string
}

const Avatar = ({ src, alt }: Props) => {
  return (
    <div className="w-10 h-10 overflow-hidden rounded-full">
      <img src={src} alt={alt} className="w-full" />
    </div>
  )
}

export default Avatar
