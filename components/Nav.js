import { signIn, signOut, useSession } from 'next-auth/react';

import Link from 'next/link';
import React from 'react';

function Nav() {
  const { data: session } = useSession();
  return (
    <div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/Detail'>Detail</Link>
        </li>
        <li>
          <Link href='/Login'>Login</Link>
        </li>
        {session ? (
          <li>
            <Link href='/Admin'>Admin</Link>
          </li>
        ) : (
          ''
        )}
      </ul>
      {session ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
}

export default Nav;
