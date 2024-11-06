interface Props {
  username: string
  isLoggedIn: boolean
}

function ConditionalRendering(prop: Props) {
  if (prop.isLoggedIn) {
    return <h2>Hello, {prop.username}</h2>
  } else {
    return <h2>Please log in to continue</h2>
  }
}

export default ConditionalRendering
