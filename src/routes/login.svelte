<script>
    //Importamos la funcion para hacer el inicio de sesion
    import {auth} from '../firebase'

    let email ='';//Email del usuario
    let password = '';//Password del usuario

    const login = async () =>{//Funcion de registro de usuario
        try{
            auth.signInWithEmailAndPassword(email,password)
            //Mensaje de validacion
            console.log("Usuario logueado")
        } catch(error){
            //En caso de error al registrarse...
            console.log(error.code);
            console.log(error.message);
        }
    }

    const logout = async () => {
    try{
        auth.signOut();
        console.log("Usuario cerrado")
        
    }catch(error){
        console.log(error.message)
    }
}


</script>


<h1>Login</h1>

<input type="text" placeholder="Email" bind:value={email}>
<input type="text" placeholder="Password" bind:value={password}>
<button on:click={login}>login</button>
<button on:click={logout}>Salir de sesion activa</button>