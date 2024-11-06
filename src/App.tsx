import MyButton from './components/MyButton'

function App() {
  return (
    <div>
      <MyButton title="I'm a disabled button" disabled={true}></MyButton>
      <MyButton title="I'm not a disabled button" disabled={false}></MyButton>
    </div>
  )
}

export default App
