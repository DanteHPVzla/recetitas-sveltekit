<script>

    import { db } from "../firebase";
    import { auth } from "../firebase";
    import { storage } from "../firebase";

    //Inicializacion de variables genereales
    let titulo = '';
    let duracion = 0;
    let descripcion = '';
    let dificultad = '';
    let imagen;

    //Apartado de seleccion de imagen
    const onFileSelected =(e)=>{
        imagen = e.target.files[0];
    }

    //Apartado de ingredientes
    let nIngredientes = 1;
    let ingrediente = '';
    let ingredientes = [];

    const aggIngrediente = () =>{
        ingredientes = [...ingredientes,ingrediente]
        nIngredientes ++;
        ingrediente = '';
        console.log(ingredientes)
    }

    //Apartado de Pasos
    let nPasos = 1;
    let paso = '';
    let pasos = [];

    const aggPaso = () =>{
        pasos = [... pasos,paso]
        nPasos ++;
        paso = '';
        console.log(pasos)
    }

    //Subir recetas
    const subirReceta = () =>{
        let user = auth.currentUser

        ///////////////////////////////////////SUBIENDO IMAGEN
        
        let imgURL;

        let storageRef = storage.ref('/recetas/' + imagen.name);
        
        let uploadTask = storageRef.put(imagen);

        uploadTask.on('state_changed', function(){
            },function(error) {
                    console.log(error.message)
            },function() {
                console.log("SUBIDA EXITOSA BRINDEMOOOS")
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    imgURL = downloadURL;
                });
        });


        let receta = {
            //autor: correo o nombre del autor
            titulo: titulo,
            descripcion: descripcion,
            duracion: duracion,
            dificultad: dificultad,
            ingredientes:ingredientes,
            pasos:pasos,
            npuntuado:0,
            puntuado:0.0,
            img: imgURL
        }
        
        db.collection('recetas').doc().set(receta);
        ////////////////////////////////////////////////////////RESETEO
        //reinicio de ingredientes
        nIngredientes = 1;
        ingredientes = [];
        ingrediente = '';

        //reinicio de pasos
        nPasos = 1;
        paso = '';
        pasos = [];

        //Reinicio general
        titulo = '';
        duracion = 0;
        descripcion = '';
        imagen = '';
    }
</script>

<div class="container">
    <form class="form-container">
        <h1>Agregar receta</h1>
        
        <h2>Titulo de la receta</h2>
        <input type="text" bind:value={titulo} placeholder="Titulo Receta">
        
        <h2>Descripcion de la receta</h2>
        <input type="text" bind:value={descripcion} placeholder="Descripcion de la receta">
        
        <h2>Duracion en minutos</h2>
        <input type="number" bind:value={duracion} placeholder="Duracion de la receta">
        
        <h2>Lista de ingredientes</h2>
        <form on:submit|preventDefault={aggIngrediente}>
            <input type="text" bind:value={ingrediente} placeholder="Ingrediente {nIngredientes}">
            <button>Agregar</button>
        </form>
        
        <h2>Pasos a seguir</h2>
        <form on:submit|preventDefault={aggPaso}>
            <input type="text" bind:value={paso} placeholder="Pasos a seguir {[nPasos]}">
            <button>Agregar</button>
        </form>
        
        <h2>Dificultad</h2>
        <select name="dificultad" id="dificultad" bind:value={dificultad}>
            <option value="Facil">Facil</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Dificil">Dificil</option>
        </select>
        
        <h2>Foto</h2>
        <input type="file" on:change={(e)=>onFileSelected(e)}>
        
        <button on:click={subirReceta}>Subir</button>
    </form>
    <section class="preview">
        <h1>{titulo}</h1>
        <h1>{(duracion===0) ? duracion = "" : duracion}</h1>
        <h1>{descripcion}</h1>
        <h1>{dificultad}</h1>
        <ul>
            {#each ingredientes as item,index}
                <li>
                    {index + 1} - {item}
                </li>   
            {/each}
        </ul>
        
        <ul>
            {#each pasos as item,index}
                <li>
                    {index + 1} - {item}
                </li>
            {/each}
        </ul>
    </section>
</div>



<style lang="scss">
    .container{
        display: flex;
        flex-direction: column;
        .form-container{
            display: flex;
            flex-direction: column;
            padding: 20px;
        }
    }
    .preview{
        background: white;
        padding: 20px;
    }
</style>