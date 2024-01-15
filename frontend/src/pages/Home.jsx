import React, {useEffect, useState} from 'react'

const Home = () => {
const [birthdays, setBirthdays] = useState(null)

  // getting all the details for Birthdays
 useEffect(()=>{
const fetchBirthdays = async () =>{
const response = await fetch("localhost:4000//api/birthdays");
const json = await response.json();

if(response.ok){
setBirthdays(json)
}


}
fetchBirthdays()
 },[])
 
  return (
    <div className=''>
        <p className='  text-center font-extrabold bg-orange-500'>Hi</p>
        
        </div>
  )
}

export default Home