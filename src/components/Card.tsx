import CuteMe from '../assets/images/cute_me.png'

function Card() {
  return (
    <div className='container mt-3 p-3'>
      <div
        className='card shadow p-3 d-flex justify-content-center align-items-center'
        style={{
          width: '400px',
        }}
      >
        <img
          src={CuteMe}
          alt='Card Image'
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
        <h2 className='text-primary mt-3'>Ralph Maron Eda</h2>
        <p className='text-secondary text-center'>
          I am a Computer Engineer and I like Web and Mobile Development.
        </p>
      </div>
    </div>
  )
}

export default Card
