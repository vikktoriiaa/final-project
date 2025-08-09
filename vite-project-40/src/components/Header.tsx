type Props = {
  onChangeTheme: () => void
  onSignIn: () => void,
}
export const Header = ({onChangeTheme, onSignIn}: Props) => {
  return (
    <header className="w-full h-auto bg-[#2436a7] flex justify-between items-center-center p-5">
      <button className='bg-blue-400 text-white p-2 rounded-2xl'>
        <img src="../public/burger.svg" alt="burger-menu" className="w-8 h-8" />
      </button>
      <div className = 'flex gap-1'>
        <button className='bg-blue-400 rounded-2xl text-white p-2'>
          <img src="../public/search.svg" alt="search" className="w-6 h-6" />
        </button>
        <button className='bg-blue-400 rounded-2xl text-white p-2' onClick={onSignIn}>Sign In</button>
        <button className='bg-blue-400 rounded-2xl text-white p-2' onClick={onChangeTheme}>Change theme</button>
      </div>
    </header>
  )
}