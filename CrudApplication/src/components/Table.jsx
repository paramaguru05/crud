import React, { useContext } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import DataContext from '../context/DataContext';
const Table = () => {
    const {id,setId,show,setShow,data,handleDelete,handleEdit} = useContext(DataContext)
  return (
    <>
      
    {show.table && <>
            
            <p className=' w-11/12 sm:w-9/12  flex justify-end '>
                    <button onClick={(previousState)=>setShow({
                       ...previousState,table:false,addUser:true
                    })} className=' bg-green-400 mr-4 md:mr-10 lg:mr-16 text-white px-5 py-1 rounded-md mb-7 hover:bg-green-300 '>
                        New
                    </button>
            </p>

                <table className={`text-white w-11/12 sm:w-9/12`}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
      <tbody >
                {

            data.map((val,index)=>{
                    return <tr key={index} >
                            <td>{index+1}</td>
                            <td>{val.userName}</td>
                            <td>{val.userAge}</td>
                            <td>{val.userCityName}</td>
                            <td>
                                <button onClick={()=>[setShow((previousState)=>{
                                    return {
                                        ...previousState,table:false,edit:true
                                    }
                                }),handleEdit(index),setId(index)]}  className='bg-green-500 text-white px-3 rounded-md shadow-2xl hover:bg-green-300 shadow-green-600'>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button onClick={()=>handleDelete(index)} className='text-red-500 shadow-2xl shadow-red-600'><FaRegTrashAlt /></button>
                            </td>
                        </tr>

            }) 

                }
    </tbody>
            </table>
    </>}
    </>
  )
}

export default Table