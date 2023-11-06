import { useRouter } from 'next/router'
import React from 'react'

export default function AuthPages({children}) {
    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [school, setSchool] = React.useState(typeof window !== 'undefined' && window.localStorage.getItem("schoolSlug"))
    React.useEffect(()=>{
        if(typeof window !== 'undefined'){
            const token = window.localStorage?.getItem("easysch_token")
            const status = window.localStorage?.getItem("attendanceStatus")
            if(token){
                if(status){
                    router.asPath!=="/" ?
                    window.location.href = "/" : ""
                } else {
                    
                }
            }
            else {
                router.asPath.includes("/login") ? "" :
                window.location.href = `/${school}/login`
            }
        }
    }, [])
  return (
    <div>
        {children}
    </div>
  )
}
