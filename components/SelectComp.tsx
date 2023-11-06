import { getRequest } from '@/api/apiCall'
import { HOMEROOMS } from '@/api/apiUrl'
import { queryKeys } from '@/api/queryKey'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function SelectComp({setFilterOption}) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(e.target.value)
  }
  const [school, setSchool] = React.useState(typeof window !== 'undefined' && localStorage.getItem('schoolId'))
  const [rooms, setRooms] =  React.useState([])
  // const [room, setRoom] = React.useState('')
  const {data} =  useQuery({
    queryKey: [queryKeys.getClasses, school],
    queryFn: async()=> await getRequest({url:HOMEROOMS(school)}),
    enabled: !!school
  })
  React.useEffect(()=> {
    setRooms(data?.data)
  }, [data?.data])
  return (
    <div>
        <select className='px-4 py-[10px] h-10 rounded-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full focus:border-[#5F30E2] outline-none ' onChange={handleSelect}>
          <option value="all">All</option>
          {
            rooms?.map((rm)=> <option key={rm._id} value={rm.name}>{rm.name}</option>)
          }
        </select> 
    </div>
  )
}
