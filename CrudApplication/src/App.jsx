import React from 'react'
import Table from './components/Table'
import  {  DataProvider } from './context/DataContext'
import Edit from './components/Edit'
import AddusersDeatails from './components/AddusersDetails'
const App = () => {
  return (
    <>
    
      <DataProvider>
        <section className='bg-slate-700 h-screen flex flex-col items-center justify-center ' >
            <Table/>
            <AddusersDeatails/>
            <Edit/>
        </section>
          
      </DataProvider>

   
    </>
  )
}

export default App