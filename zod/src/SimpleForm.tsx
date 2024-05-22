
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {z} from "zod"
/*
What i learned ?
react-hook-form
    register and validate Form
    handle Errors and Messages in Form
    prevent loading state manually while form is submitting using isSubmitting    
     we can also return a custom/async Error n try/catch by importing setError from react-hook-form 
    we can put deault values in form too by adding deault values in useForm params
*/

const schema = z.object(({
    name: z.string().min(7),
    email: z.string().email("Invalid email address"),
}))

type formFields = z.infer<typeof schema>
// type FormData = {
//     name:string,
//     email:string
// }
function SimpleForm() {
const {register , handleSubmit ,formState: {errors, isSubmitting}} = useForm<formFields>({
    defaultValues: {
        name: 'default name',
        email: 'default email'
    },
    resolver:zodResolver(schema)
})

// To Prevent Managing Loading state while form is submitting
const onSubmit = async(data: any) => {
    await new Promise((r) => setTimeout(r, 1000))
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
