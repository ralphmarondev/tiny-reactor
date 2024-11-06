function RenderingList() {
  const fruits = ['banana', 'strawberry', 'blueberry', 'pineapple']
  const listItems = fruits.map((fruit) => <li>{fruit}</li>)

  const fruits2 = [
    {
      id: 1,
      name: 'banana',
      calories: 95,
    },
    {
      id: 2,
      name: 'strawberry',
      calories: 45,
    },
    {
      id: 3,
      name: 'blueberry',
      calories: 105,
    },
    {
      id: 4,
      name: 'pineapple',
      calories: 35,
    },
  ]
  // sorting fruits by name in alphabetical order.
  // to make it reverse, just reverse the a and b after the arrow.
  fruits2.sort((a, b) => a.name.localeCompare(b.name))

  // sorting based on calories
  // fruits2.sort((a, b) => a.calories - b.calories)
  const listItems2 = fruits2.map((fruit2) => (
    <li key={fruit2.id}>
      {fruit2.name} - {fruit2.calories}
    </li>
  ))

  return (
    <div>
      <h2>List Of Fruits</h2>
      <ul>{listItems}</ul>
      <hr />

      <h2>List of Fruits - in object</h2>
      <ul>{listItems2}</ul>
    </div>
  )
}

export default RenderingList
