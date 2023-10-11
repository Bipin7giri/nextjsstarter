'use client'
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
  return (
    <div>
        <button className='bg-red-400' onClick={(()=>{
          deleteCookie('logged')
            router.push("/login")
        })}>Logout</button>
      <h1>This is dashboard page this page is show only after login</h1>
    </div>
  )
}

export default page
