import ConditionalRendering from './components/ConditionalRendering'

function App() {
  return (
    <>
      <ConditionalRendering username='ralphmaron' isLoggedIn={true} />
    </>
  )
}

export default App
