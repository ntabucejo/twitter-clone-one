type Props = {
  src: string
  alt: string
}

const Avatar = ({ src, alt }: Props) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Avatar
