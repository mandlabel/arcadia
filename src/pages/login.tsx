import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

/**
 * Renders the Login component.
 *
 * Displays user information and actions based on session status.
 *
 * @returns The JSX element representing the Login component.
 */

const Login = () => {
  const { data: session } = useSession()

  if (session) {
    const profilePicture = session.user?.image ?? ''

    /**
     * Renders the UI for a signed-in user.
     *
     * @returns The JSX element representing the UI for a signed-in user.
     */
    return (
      <div>
        <p>Welcome, {session.user?.email}</p>

        <Image
          src={profilePicture}
          width={50}
          height={50}
          alt="profile picture"
        />

        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  } else {
    /**
     * Renders the UI for a user who is not signed in.
     *
     * @returns The JSX element representing the UI for a user who is not signed in.
     */

    return (
      <div>
        <p>You are not signed in!</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }
}
export default Login
