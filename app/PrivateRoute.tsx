// Import necessary dependencies
'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LayoutPage = ({ children }:any) => {
  const router = useRouter();

  useEffect(() => {
    // Check authentication status on the client side
    if(children){
        const isAuthenticated = localStorage.getItem("isLogin");
    
        // If not authenticated, redirect to the login page
        if (!isAuthenticated) {
          router.push("/auth/login");
        }
    }

  }, [router,children]);

  // Return children only when authenticated
  return <div>{children}</div>;
};

export default LayoutPage;
