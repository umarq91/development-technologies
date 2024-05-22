
import { useForm } from 'react-hook-form'
/*
What i learned ?
react-hook-form
    register and validate Form
    handle Errors and Messages in Form
    prevent loading state manually while form is submitting using isSubmitting    
     we can also return a custom/async Error n try/catch by importing setError from react-hook-form 
    we can put deault values in form too by adding deault values in useForm params
*/

type FormData = {
    name:string,
    email:string
}
function SimpleForm() {
const {register , handleSubmit ,formState: {errors, isSubmitting}} = useForm<FormData>({
    defaultValues: {
        name: 'default name',
        email: 'default email'
    }
})

// To Prevent Managing Loading state while form is submitting
const onSubmit = async(data: any) => {
    await new Promise((r) => setTimeout(r, 3000))
    console.log(data);
    
}
  return (
    <div>
        
        <form onSubmit={handleSubmit(onSubmit)}>

        {/* <input type="text" {...register('name', { required: true })}  />   we can validate like this too  */} 
      {/* this error message will goto error.name.message and will be displayed */}
        <input type="text" {...register('name', { required: 'name is required' })}  />
        {errors.name && <p>{errors.name.message}</p>}
        <input type="text" {...register('email',{ required: 'Email is required'})} />
        {errors.name && <p>{errors.email?.message}</p>}
        <button type='submit' disabled={isSubmitting}>Submit</button>
        </form>
    </div>
  )
}

export default SimpleForm
