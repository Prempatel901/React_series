import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


const formScheme =z.object({
    name: z.string().min(3,"Minimum lenght should be 3").max(20,"Maximum lenght should be 20"),
    age: z.coerce.number().min(10, "Minimum age should be 10").max(30, "Maximum age should be 30"),
    pass: z.string().min(5,"Minimum lenght should be 5").max(20,"Maximum lenght should be 20"),
    confirm: z.string(),
    email: z.email("Email is invalid")
}).refine((data)=>data.pass ===data.confirm,{
    message: "password don't match",
    path: ["confirm"],//path of error
})

function Zodform(){

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({
        resolver: zodResolver(formScheme)
    });

     function submitForm(data){
        console.log(data)
    }

    return(
    <>
    <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="first">Name:  </label>
                <input id="first" {...register("name")} />
                {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="second">Age:  </label>
                <input id="second" {...register("age")} />
                {errors.age && <span>{errors.age.message}</span>}
        </div>
      
        <div>
            <label htmlFor="third">Password:  </label>
                <input type="password" id="third" {...register("pass")} />
                {errors.pass && <span>{errors.pass.message}</span>}
        </div>
          <div>
            <label htmlFor="fifth">Confirm Password:  </label>
                <input type="password" id="fifth" {...register("confirm")} />
                {errors.confirm && <span>{errors.confirm.message}</span>}
        </div>
        <div>
            <label htmlFor="fourth">Email:  </label>
                <input  id="third" {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit">Submit</button>
    </form>
    </>
    )
}

export default Zodform






// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// const formScheme = z.object({
//   name: z.string().min(3, "Minimum length should be 3").max(20, "Maximum length should be 20"),
//   age: z.number().min(10, "Minimum age should be 10").max(30, "Maximum age should be 30"),
//   pass: z.string().min(5, "Minimum length should be 5").max(20, "Maximum length should be 20"),
// });

// function Zodform() {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     resolver: zodResolver(formScheme)
//   });

//   function submitForm(data) {
//     console.log(data);
//   }

//   return (
//     <form onSubmit={handleSubmit(submitForm)}>
//       <div>
//         <label>Name: </label>
//         <input {...register("name")} />
//         {errors.name && <span>{errors.name.message}</span>}
//       </div>

//       <div>
//         <label>Age: </label>
//         <input
//           type="number"
//           {...register("age", { valueAsNumber: true })}
//         />
//         {errors.age && <span>{errors.age.message}</span>}
//       </div>

//       <div>
//         <label>Password: </label>
//         <input type="password" {...register("pass")} />
//         {errors.pass && <span>{errors.pass.message}</span>}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Zodform;