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
          <Link href='/Contact'>Contact</Link>
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
        <button
          className='border border-solid border-black p-2 rounded-sm bg-purple-500 text-white'
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      ) : (
        <button
          className='border border-solid border-black p-2 rounded-sm bg-green-500 text-white'
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </div>
  );
}

export default Nav;
