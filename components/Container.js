


import Link from './Link'
import SectionContainer from './SectionContainer'

import ThemeChanger from './ThemeChanger'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <ThemeChanger className=""/>
      <div className="">

        <main className="">{children}</main>

      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper