<script>
    //Importamos la funcion de registro de usuario AUTH
   import {auth} from "../firebase";

   let email = ''//Email del usuario
   let password = ''//Password del usuario
   const register = async () =>{//Funcion de registro de usuario
        try{
            auth.createUserWithEmailAndPassword(email,password)
            //Mensaje de validacion
            console.log("Usuario creado")
        } catch(error){
            //En caso de error al registrarse...
            console.log(error.code);
            console.log(error.message);
        }
    }
</script>


<!--Formulario de registro-->
<form>
    <input type="text" placeholder="Email"  bind:value={email}>
    <input type="password" placeholder="Password" bind:value={password}>
    <button on:click={register}>Registrar</button>
</form>

<style lang="scss">



</style>