'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
  return (
    <div>
        <button className='bg-red-400' onClick={(()=>{
            typeof window !== "undefined" && localStorage.removeItem("isLogin");
            router.push("/auth/login")
        })}>Logout</button>
      <h1>This is dashboard page this page is show only after login</h1>
    </div>
  )
}

export default page
