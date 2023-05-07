import Login from './login'

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

/**
 * Renders the header component.
 *
 * @returns The JSX element representing the Header component.
 */

const Header = () => (
  <header className="h-55 fixed top-0 w-full bg-gray-900">
    <h1>Arcadia - Interview</h1>
  </header>
)

/**
 * Renders the content component.
 *
 * @returns The JSX element representing the Content component.
 */

const Content = () => (
  <main className="mt-25 mb-50">
    <h2>Content</h2>
    <p>Welcome to the content section of the app!</p>
  </main>
)

/**
 * Renders the footer component.
 *
 * @returns The JSX element representing the Footer component.
 */

const Footer = () => (
  <footer className="h-100 fixed bottom-0 w-full bg-gray-900">
    <p>Footer</p>
  </footer>
)
