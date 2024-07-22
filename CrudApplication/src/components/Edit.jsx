import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const Edit = () => {
  const {editError,setEditError,error,setError,handleSetEdit,show,setShow,handleEdit,editUserName,setEditUserName,editUserAge,setEditUserAge,editUserCityName,setEditUserCityName} = useContext(DataContext)
  return (
    <>
    {show.edit &&  <>
          <p className={` text-cyan-700 font-semibold text-2xl mb-8 animate-bounce duration-100`}>Edit User Details</p>
          <form className={` shadow-2xl rounded-lg shadow-green-500 bg-slate-500 w-1/2 sm:h-1/3 h-1/3 flex flex-col justify-evenly pl-5 sm:p-0 sm:pl-9 mb-10 `} onSubmit={(e)=>e.preventDefault()}>
            
            <div id="input-group">
              <label className='absolute -left-full' htmlFor="name">Name</label>
              <input type="text" value={editUserName} onChange={(e)=>setEditUserName(e.target.value)}  placeholder='Enter Name' id='name' className='input' />
              {editError.name && <p className='text-center  w-4/5  text-red-400 font-mono font-bold pt-4'>please fill this filed...</p>}
            </div>

            <div  id="input-group">
              <label className='absolute -left-full' htmlFor="age">Age</label>
              <input type="text" value={editUserAge} onChange={(e)=>setEditUserAge(e.target.value)} id='age' placeholder='Enter Age' className='input' />
              {editError.age && <p className='text-center  w-4/5  text-red-400 font-mono font-bold pt-4'>please enter number only...</p>}
            </div>

            <div id="input-group">
              <label className='absolute -left-full w-3/4' htmlFor="city">City</label>
              <input type="text" value={editUserCityName} onChange={(e)=>setEditUserCityName(e.target.value)} id='city' placeholder='Enter City Name' className='input' />
              {editError.city && <p className='text-center  w-4/5  text-red-400 font-mono font-bold pt-4'>Fille this name filed....</p>}
            </div>

          </form>

          <div className='w-1/2 flex justify-evenly  '>
              <button onClick={handleSetEdit} className='btn' type='submit'>submit</button>
              <button className='btn' type='reset'>Reset</button>
          </div>
      </>    
     }
    </>
  )
}

export default Edit