


import Link from './Link'
import SectionContainer from './SectionContainer'

import ThemeChanger from './ThemeChanger'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
            <ThemeChanger />


        </header>
        <main className="mb-auto">{children}</main>

      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper