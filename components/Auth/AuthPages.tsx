import { useRouter } from 'next/router'
import React from 'react'

export default function AuthPages({children}) {
    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [school, setSchool] = React.useState(typeof window !== 'undefined' && window.localStorage.getItem("schoolSlug"))
    React.useEffect(()=>{
        if(typeof window !== 'undefined'){
            const token = window.localStorage?.getItem("easysch_token")
            setIsLoggedIn(token ? true : false)
        }
        else {
            setIsLoggedIn(false)
            router.push(`/${school}/login`, `/${school}/login`)
        }
    })
    // React.useEffect(()=>{
    //     if(isLoggedIn){
    //         router.push(`/ `, '/')
    //     }
    //     else {
    //         router.push(`/${school}/login`, `/${school}/login`)
    //     }
    // },[isLoggedIn])
  return (
    <div>
        {children}
    </div>
  )
}
