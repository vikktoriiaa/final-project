import { Header } from './components/Header'
import { Main } from './components/Main'  
import { Footer } from './components/Footer'
import { useState } from 'react'
import { THEME } from './constants/theme'
import { ListController } from './components/CardsPosts/ListCardsPosts/ListController'

export function App() {

  const [theme, setTheme] = useState(THEME.LIGHT)
  const [page, setPage] = useState<'home'|'form'>('form');

  const changeTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
  }
  return (
    <div className='flex flex-col min-h-screen'>
      {page === 'home' && <Header onChangeTheme={changeTheme} onSignIn={() => setPage('form')} />}
      {page === 'form' && <Header onChangeTheme={changeTheme} onSignIn={() => setPage('form')} />}
      {page === 'home' &&
        <div className={`${theme === THEME.DARK ? 'text-white bg-[#313037]' : 'text-black bg-[#f3f3f3]'}`}>
          <ListController theme={theme} />
        </div>}
      {page === 'form' && <Main theme={theme} onBackToHome={() => setPage('home')} />}
      <Footer theme={theme} />
    </div>
  )
}


