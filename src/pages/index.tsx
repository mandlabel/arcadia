import Login from './login'
import Header from './layout/header'
import Footer from './layout/footer'
/**
 * Renders the Home component.
 *
 * @returns The JSX element representing the Home component.
 */

export default function Home() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  )
}
