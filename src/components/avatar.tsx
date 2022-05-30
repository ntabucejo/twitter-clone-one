type Props = {
  src: string
  alt: string
}

const Avatar = ({ src, alt }: Props) => {
  return (
    <div className="w-12 h-12 overflow-hidden rounded-full">
      <img src={src} alt={alt} className="w-full" />
    </div>
  )
}

export default Avatar
