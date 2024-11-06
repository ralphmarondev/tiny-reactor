import PropsDemo from './components/PropsDemo'

function App() {
  return (
    <>
      <PropsDemo
        title='Hello World'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, libero?'
      />
      <PropsDemo title='Hello World' />
    </>
  )
}

export default App
