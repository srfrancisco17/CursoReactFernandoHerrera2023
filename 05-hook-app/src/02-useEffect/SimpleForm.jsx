import { useState } from "react"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'francisco',
    email: 'srfrancisco17@gmail.com',
  });

  const {username, email} = formState;

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        name="username"
        placeholder="Username"
        className="form-control" 
        type="text" 
        value={username}
        />
      <input
        name="email"
        placeholder="ejemplo@ejemplo.com"
        className="form-control mt-2" 
        type="email" 
        value={email}
      />
    </>
  )
}
