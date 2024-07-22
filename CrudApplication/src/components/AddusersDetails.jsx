import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
const AddusersDeatails = () => {

  const {error,setError,show,setShow,userName,setUserName,userAge,setUserAge,userCityName,setUserCityName,handleAddUser} = useContext(DataContext)
  return (
    <>
    {
      show.addUser && <>
          <p className={` text-cyan-700 font-semibold text-2xl mb-8 animate-bounce duration-100`}>Add User Details</p>
          <form onSubmit={(e)=>e.preventDefault()} className={` shadow-2xl rounded-lg shadow-green-500 bg-slate-500 w-1/2 sm:h-1/3 h-1/3 flex flex-col justify-evenly pl-5 sm:pl-9 mb-10 `} >   
                  <div id="input-group">
                    <label className='absolute -left-full' htmlFor="name">Name</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}  placeholder='Enter Name' id='name' className='input' />
                   {error.name && <p className='text-center  w-4/5    text-red-400 font-mono font-bold pt-4'>please fill this filed...</p>}
                  </div>

                  <div  id="input-group">
                    <label className='absolute -left-full' htmlFor="age">Age</label>
                    <input type="text" value={userAge} onChange={(e)=>setUserAge(e.target.value)} id='age' placeholder='Enter Age' className='input' />
                    {error.age && <p className='text-center  w-4/5  text-red-400 font-mono font-bold pt-4'>please enter number only...</p>}
                  </div>

                  <div id="input-group">
                    <label className='absolute -left-full w-3/4' htmlFor="city">City</label>
                    <input type="text" value={userCityName} onChange={(e)=>setUserCityName(e.target.value)} id='city' placeholder='Enter City Name' className='input' />
                    {error.city && <p className='text-center  w-4/5  text-red-400 font-mono font-bold pt-4'>Fille this name filed....</p>}
                  </div>
          </form>
          <div className='w-1/2 h-10 flex justify-evenly  '>
                    <button onClick={handleAddUser} className='btn' type='submit'>
                      submit
                    </button>
                  <button className='btn' type='reset'>Reset</button>
          </div> 

      </>
    }  
    </>
  )
}

export default AddusersDeatails
