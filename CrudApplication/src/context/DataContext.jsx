import {  createContext,useState,useEffect } from "react";
const DataContext = createContext({})

export const DataProvider=({children})=>{
    const [error,setError] = useState({
        name:false,
        age:false,
        city:false
    })
    const [editError,setEditError] = useState({
        name:false,
        age:false,
        city:false
    })

    const [id,setId] = useState(0)
    const [show,setShow] =useState({
        table : true,
        edit : false,
        addUser : false
    })
    const [editUserName,setEditUserName] = useState('')
    const [editUserAge,setEditUserAge] = useState('')
    const [editUserCityName,setEditUserCityName] = useState('') 
    const [userName,setUserName] = useState('')
    const [userAge,setUserAge] = useState('')
    const [userCityName,setUserCityName] = useState('') 
    const [data,setData] = useState([])
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("datas"))
        setData(data)
    },[])    
    function handleDelete(id){
       
       let deleteData =  data.filter((val,index)=>index != id)
       localStorage.setItem("datas",JSON.stringify(deleteData))
       setData(deleteData)  
       
    }
    function handleAddUser(){
        let success =true
        if(userName ===''){
            
            setError((previousState)=>{
                return {
                    ...previousState,name:true
                }
            })
            success=false
        }else{
            setError((previousState)=>{
                return {
                    ...previousState,name:false
                }
            })

        }
        if(userAge ===""){
            
            setError((previousState)=>{
                return {
                    ...previousState,age:true
                }
            })
            success=false
            
        }else{
            setError((previousState)=>{
                return {
                    ...previousState,age:false
                }
            })
        }
        if(isNaN(userAge)){
            setError((previousState)=>{
                return {
                    ...previousState,age:true
                }
            })
            success=false

        }
        else{
            setError((previousState)=>{
                return {
                    ...previousState,age:false
                }
            })
        }
        if(userCityName===""){
            
            setError((previousState)=>{
                return {
                    ...previousState,city:true
                }
            })
            success=false
        }else{
            setError((previousState)=>{
                return {
                    ...previousState,city:false
                }
            })
        }

        if(success){
            setShow((previousState)=>{
                return {
                    ...previousState,table:true,addUser:false
                }
            })
            let id = data.length?data.length:1
            let userDetails = {
                id,
                userName,
                userAge,
                userCityName,
            }
            
            setData([...data,userDetails])
            localStorage.setItem("datas",JSON.stringify(data))
            setUserName('')
            setUserAge('')
            setUserCityName('')
        }
           
    }

    function handleEdit(id){
        let filterdedData = data.filter((val,index)=>id === index)
        setEditUserName(filterdedData[0].userName)
        setEditUserAge(filterdedData[0].userAge)
        setEditUserCityName(filterdedData[0].userCityName)
    }
    function handleSetEdit(){
        let editSuccess = true
        if(editUserName ===''){
            
            setEditError((previousState)=>{
                return {
                    ...previousState,name:true
                }
            })
            editSuccess=false
        }else{
            setEditError((previousState)=>{
                return {
                    ...previousState,name:false
                }
            })

        }
        if(editUserAge ===""){
            
            setEditError((previousState)=>{
                return {
                    ...previousState,age:true
                }
            })
            editSuccess=false
            
        }else{
            setEditError((previousState)=>{
                return {
                    ...previousState,age:false
                }
            })
        }
        if(isNaN(editUserAge)){
            setEditError((previousState)=>{
                return {
                    ...previousState,age:true
                }
            })
            editSuccess=false

        }
        else{
            setEditError((previousState)=>{
                return {
                    ...previousState,age:false
                }
            })
        }
        if(editUserCityName === ""){
            setEditError((previousState)=>{
                return {
                    ...previousState,city:true
                }
            })
            editSuccess=false
        }else{
            setEditError((previousState)=>{
                return {
                    ...previousState,city:false
                }
            })
        }
        if(editSuccess){
            setShow((previousState)=>{
                return {
                    ...previousState,table:true,edit:false
                }
            })
            const updatedUserDetails = {
                userName:editUserName,
                userAge:editUserAge,
                userCityName:editUserCityName
            }
            data[id].id=id+1
            data[id].userName=updatedUserDetails.userName
            data[id].userAge=updatedUserDetails.userAge
            data[id].userCityName=updatedUserDetails.userCityName
            console.log(data)
            localStorage.setItem("datas",JSON.stringify(data))

        }       
    }
    return(
        <DataContext.Provider value={{
            data,handleDelete,userName,setUserName,userAge,setUserAge,userCityName,setUserCityName,
            handleAddUser,handleEdit,editUserName,setEditUserName,editUserAge,setEditUserAge,
            error,setError,id,setId,editUserCityName,setEditUserCityName,show,setShow,handleSetEdit,
            editError,setEditError
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext