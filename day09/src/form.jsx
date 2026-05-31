import { useForm } from "react-hook-form"

function Form(){

    const {register,handleSubmit, formState:{errors}} = useForm();


    function submitForm(data){
        console.log(data)
    }

    console.log("render")

    return(
    <>
    <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="first">Name:  </label>
                <input id="first" {...register("name",{required: "Name can't be empty"})} />
                {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="second">Age:  </label>
                <input id="second" {...register("age",{
                    min:{
                        value:10,
                        message:"Minimum age should be 12"
                    },
                    max:{
                        value:50,
                        message:"Maximum age should be 50"
                    }

                })} />
                {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
            <label htmlFor="third">Password:  </label>
                <input id="third" {...register("pass",{
                    minLength:{
                        value:10,
                        message:"Minimum length should be 5"
                    },
                    maxLength:{
                        value:20,
                        message:"Maximum length should be 20"
                    }
                })} />
                {errors.pass && <span>{errors.pass.message}</span>}
        </div>
        <button type="submit">Submit</button>
    </form>
    </>
    )
}


export default Form