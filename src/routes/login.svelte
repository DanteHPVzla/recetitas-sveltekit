<script>
    //Importamos la funcion para hacer el inicio de sesion
    import {activeSesion} from '../store';
    import {auth} from '../firebase'
    

    let email ='';//Email del usuario
    let password = '';//Password del usuario

    const login = async () =>{//Funcion de registro de usuario

        try{
            if(!$activeSesion){
                auth.signInWithEmailAndPassword(email,password)
                //Mensaje de validacion
            }else{
                console.log("Ya hay una sesion activa")
            }
        } catch(error){
            //En caso de error al registrarse...
            console.log(error.code);
            console.log(error.message);
        }
    }


</script>


<h1>Login</h1>

<input type="text" placeholder="Email" bind:value={email}>
<input type="text" placeholder="Password" bind:value={password}>
<button on:click={login}>login</button>
