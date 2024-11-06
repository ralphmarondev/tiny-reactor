interface Props {
  title: string
  description: string
}

function PropsDemo(props: Props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Description: {props.description}</p>
    </div>
  )
}

export default PropsDemo
