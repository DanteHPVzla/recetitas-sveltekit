<script>
    //Importamos la funcion de registro de usuario AUTH
   import {auth} from "../firebase";

   let email = ''//Email del usuario
   let password = ''//Password del usuario
   let confirm = ''//Confirmar password
   let username = ''//nombre del usuario
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
    <p><a href="/login">Entra</a> o reg&iacute;strate para poder crear, clasificar, comentar o guardar recetas</p>
    <label for="mail"><span>Correo Electr&oacute;nico:</span></label>
    <input type="text" name="mail" bind:value={email}>
    <label for="password"><span>Contrase&ntilde;a:</span></label>
    <input type="password" name="password" bind:value={password}>
    <label for="confirm"><span>Confirmar contrase&ntilde;a:</span></label>
    <input type="password" name="confirm" bind:value={confirm}>
    <label for="mail"><span>Nombre de usuario:</span></label>
    <input type="text" bind:value={username}>
    <p>www.recipetime.netlify.app/usuario/</p>
    <p>Se usa la direcci&oacute;n para tu p&aacute;gina de usuario, pi&eacute;nsalo bien porque no podr&aacute;s cambiarlo.</p>
    <div>
        <input type="checkbox" name="terms" id="terms">
        <label for="terms" >He le&iacute;do y acepto la <a href="/">pol&iacute;tica de privacidad y participaci&oacute;n.</a></label>
    </div>
    <br>
    <button on:click={register}>Registrar</button>
</form>

<style lang="scss">

form{

    width: 300px;
    margin: 30px auto;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;

    p{
        font-size: 12px;
        color: gray;
    }
    
    label{
        display: block;
        font-weight: bold;
        padding: 0px 15px;
        color: #f05a28;
        width: 100%;
        span{
            background: white;
            width: 100%;
        }
        
        position: relative;
        &:last-of-type{
            display: inline;
            padding: auto;
        }
        z-index: 9;
    }

    input{
        border: none;
        outline: none;
        padding: 12px 8px 4px;
        margin-top: -12px;
        margin-bottom: 10px;
        z-index: 0;
        border: dashed 2px #f05a28 ;
        width: 250px;
        border-radius: 10px 10px 0px 0px;
        &::placeholder{
            color: #f05a28;
            opacity: .7;
        }
    }

    #terms{
        width: auto;
    }

}
    
</style>