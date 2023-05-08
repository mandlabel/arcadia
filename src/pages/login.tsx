import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Map from './content/map'
/**
 * Renders the Login component.
 *
 * Displays user information and actions based on session status.
 * @function Login
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
        <table className="table-auto mx-auto border-separate border-spacing-2 border border-slate-500 py-1 m-2">
          <thead>
            <tr>
              <th>
                <Image
                  src={profilePicture}
                  width={50}
                  height={50}
                  alt="profile picture"
                  className="rounded-full border-solid border-white border-2"
                />{' '}
              </th>
              <th>Welcome, {session.user?.email}</th>
              <th>
                <button
                  className="bg-sky-500 hover:bg-sky-700 px-1 py-1"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              </th>
            </tr>
          </thead>
        </table>
        <Map />
      </div>
    )
  } else {
    /**
     * Renders the UI for a user who is not signed in.
     *
     * @returns The JSX element representing the UI for a user who is not signed in.
     */

    return (
      <div className="text-center border-separate border-spacing-2 py-3 m-2">
        <button
          className="bg-sky-500 hover:bg-sky-700 px-1 py-1"
          onClick={() => signIn()}
        >
          Sign in to view the map.
        </button>

        <p className="text-gray-500 py-2">no signal ...</p>
      </div>
    )
  }
}
export default Login
