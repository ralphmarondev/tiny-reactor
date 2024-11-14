interface Props {
  fruits: [
    {
      name: string
      calories: string
    }
  ]
}

function RenderingList2(prop: Props) {
  const listItems = prop.fruits.map((fruit) => <li>{fruit.name}</li>)
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default RenderingList2
