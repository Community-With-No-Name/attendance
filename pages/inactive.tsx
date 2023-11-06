import InActive from '@/components/inActive'
import React from 'react'

export default function inActive() {
//   React.useEffect(()=>{
//     if(typeof window !== 'undefined'){
//         const status = window.localStorage?.getItem("attendanceStatus")
//         const school = window.localStorage?.getItem("schoolSlug")
//         if(Boolean(status)){
//             window.location.href = `/${school}/attendance`
//         }
//         else {
//         }
//     }
// }, [])
  return (
      <InActive />
  )
}
