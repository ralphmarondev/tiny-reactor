interface MyButtonProps {
  title: string
  disabled: boolean
}

function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <button className='btn btn-outline-primary' disabled={disabled}>
      {title}
    </button>
  )
}

export default MyButton
