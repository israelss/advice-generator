import diceIcon from '../assets/images/icon-dice.svg'

export const NewAdviceButton = ({ disabled, onClick }: { disabled: boolean, onClick: VoidFunction }) => {
  return (
    <button
      onClick={ onClick }
      disabled={ disabled }
      className='
        bg-neonGreen
        rounded-full
        p-5
        relative
        -bottom-8
        active:drop-shadow-neonGreen
        disabled:bg-grayishBlue
        disabled:filter-none
      '>
      <img
        className='w-full'
        src={ diceIcon }
        alt="Button to get new advice, green with a black dice inside"
      />
    </button>
  )
}
