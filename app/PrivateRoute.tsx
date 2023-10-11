"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LayoutPage = ({ children }: any) => {
  const [isReady, setIsReady] = useState(false);
  const isAuthenticated =
    typeof window !== "undefined" && localStorage.getItem("isLogin");
  const router = useRouter();
  
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  setIsReady(true);
  }, [isAuthenticated, router]);

 
  const redirect = ()=>{
    router.push("/auth/login")
  }

  return isReady ? <div>{children}</div>:null;
};

export default LayoutPage;
