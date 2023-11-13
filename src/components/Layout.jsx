/* eslint-disable react/prop-types */
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='w-full'>{children}</main>
			<footer>
				<Footer />
			</footer>
		</>
  )
}

export default Layout