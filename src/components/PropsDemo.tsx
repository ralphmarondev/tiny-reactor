interface Props {
  title: string
  description?: string // note: its needs the ? to make it optional and allow default. :>
}

function PropsDemo({
  title,
  description = 'This is the default description',
}: Props) {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
    </div>
  )
}

export default PropsDemo
