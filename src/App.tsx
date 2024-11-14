import RenderingList2 from './components/RenderingList2'

function App() {
  const myFruits = [
    {
      name: 'banana',
      calories: '95',
    },
    {
      name: 'strawberry',
      calories: '105',
    },
  ]
  return (
    <>
      <RenderingList2 fruits={myFruits} />
    </>
  )
}

export default App
