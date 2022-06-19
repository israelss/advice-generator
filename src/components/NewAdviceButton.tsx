import diceIcon from '../assets/images/icon-dice.svg'

export const NewAdviceButton = () => {
  return (
    <div className='bg-neonGreen rounded-full p-3 w-10'>
      <img className='w-full' src={diceIcon} alt="Button to get new advice, green with a black dice inside" />
    </div>
  )
}
