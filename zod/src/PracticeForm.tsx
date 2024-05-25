import {z} from "zod"
import { useForm } from 'react-hook-form'
interface formFields{
    name:string,
    email:string,
    pass:string,
    confirm:string,
    age:number
  }

  function PracticeForm() {
  
  const {register , handleSubmit ,formState:{errors ,isSubmitting} } = useForm<formFields>()
  let handleForm = async(data:formFields)=>{
     await new Promise((r) => setTimeout(r, 2000))
        console.log(data);
  }


    return (
    <div>

<form action="" onSubmit={handleSubmit(handleForm)}>
{/* name */}
<input type="text" {...register('name', { required: "name is required" ,validate: (value) => value.length > 5})} />
{errors.name && <p>{errors.name.message}</p>}

{/* email */}
<input type="text" {...register('email' ,{required:"email is required"})}  />
{errors.name && <p>{errors.email.message}</p>}


{/* pass */}
<input type="password"  {...register('pass',{required:"password is required"})}/>
{errors.name && <p>{errors.pass.message}</p>}

{/* confirm */}
<input type="password" {...register('confirm',{required:"confirm password is required"})} />
{errors.name && <p>{errors.confirm.message}</p>}

{/* age */}
<input type="number" {...register('age',{required:"age is required"})}/>
{errors.name && <p>{errors.age.message}</p>}

<button type="submit" disabled={isSubmitting}>
    {isSubmitting? 'Loading' : 'submit'}
</button>
</form>
    </div>
  )
}

export default PracticeForm