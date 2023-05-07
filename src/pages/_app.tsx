import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import 'cesium/Build/Cesium/Widgets/widgets.css'

/**
 * Custom interface extending `AppProps` to include the `session` prop.
 */
interface SessionProps extends AppProps {
  session: Session
}

/**
 * The root component for the Next.js application.
 *
 * @param Component - The component to be rendered.
 * @param pageProps - The props for the rendered component.
 * @param session - The session object obtained from NextAuth.
 * @returns The JSX element representing the root application component.
 */

export default function App({ Component, pageProps, session }: SessionProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
