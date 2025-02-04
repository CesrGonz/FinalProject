import { ChangeEvent, FormEvent, useState } from 'react'
//import { loginUser } from '../services/auth.Service'



  function Login() {
    const [form,setForm] = useState(
      {
          email: '',
          password: '' 
      }
      )
  
      const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()   
        console.log("Se envio el form" , form.email) 
        }
    
        const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
             console.log(e.target)
             console.log(e.target.value) //valor del campo 
             console.log(e.target.name)// nombre del campo
             const {value,name} = e.target
            
             setForm({...form,[name]:value})
        }


  return (
    
    <div>
    
    <div className="flex flex-col items-center justify-center m-10 mx-auto md:h-screen lg:py-0 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leacking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log with your account
              </h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
     </div>   
    </div>
    </div>
  )
}

export default Login