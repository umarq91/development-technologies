import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const addressSchema = z.object({
  street: z.string().nonempty("Street is required"),
  city: z.string().nonempty("City is required"),
  zipCode: z.string().regex(/^\d{5}$/, "Zip code must be 5 digits"),
});

const userSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "You must be at least 18 years old"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  address: addressSchema,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type UserFormValues = z.infer<typeof userSchema>;

const UserRegistrationForm: React.FC = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      
      <div>
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      
      <div>
        <label>Age</label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      
      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      
      <div>
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      
      <fieldset>
        <legend>Address</legend>
        
        <div>
          <label>Street</label>
          <input {...register("address.street")} />
          {errors.address?.street && <p>{errors.address.street.message}</p>}
        </div>
        
        <div>
          <label>City</label>
          <input {...register("address.city")} />
          {errors.address?.city && <p>{errors.address.city.message}</p>}
        </div>
        
        <div>
          <label>Zip Code</label>
          <input {...register("address.zipCode")} />
          {errors.address?.zipCode && <p>{errors.address.zipCode.message}</p>}
        </div>
      </fieldset>
      
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegistrationForm;
