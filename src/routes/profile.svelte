<script>
	import RecipeCard from './../lib/recipeCard.svelte';
    let profileImg = null; //imagen de perfil
    let username = ''//nombre de usuario
    let horas = null; //activo hace...
    const show = () => {
        document.getElementById("edit").style.visibility = 'visible';
    }
    const hide = () => {
        document.getElementById("edit").style.visibility = 'hidden';
    }


    
</script>

<!--Formulario de registro-->
<div class="container">
    <div class="img-bg">
        <div on:mouseenter={show} on:mouseleave={hide} class="profile-img">
            <img src="https://placekitten.com/200/300" alt="">
            <div id="edit"><span class="fas fa-edit"></span></div>
        </div>
        <h3>Username</h3>
        <p>Activo hace: {horas}h</p>
    </div>
    <section>
        <div class="title-container">
            <h4>Recetas</h4>
            <div class='linea'></div>
        </div>
        <div class="recipes">
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
        </div>
    </section>
</div>


<button on:click={prueba}>PRUEBAAAAAAAA</button>

<style lang="scss">
.container{
        display: flex;
        flex-direction: column;
        height: calc(100vh - 65px);
        .img-bg{
            width: 100%;
            height: 100%;
            min-height: 320px;
            max-height: 450px;
            overflow: hidden;
            background-image: url(/img/bg_2.jpg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-bottom: solid 2px #f05a28;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .profile-img{
                overflow: hidden;
                width: 200px;
                height: 200px;
                border-radius: 50%;
                display: flex;
                position: relative;
                cursor: pointer;
                img{
                    width: 100%;
                    object-fit: cover;
                }
                #edit{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: rgba($color: #000000, $alpha: .4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    visibility: hidden;
                    span{
                        color: white;
                        font-size: 1.5em;
                    }
                }
            }
            h3{
                padding: 10px 0;
                font-size: 2em;
            }
            @media (min-width: 768px) {
                max-height: 100%;
            }
        }
        section{
            background: white;
            padding: 25px;
            .title-container{
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                h4{
                    font-size: 1.5em;
                    margin-right: 4px;
                }
                .linea{
                    width: 100%;
                    border-top: dashed 3px #f05a28;
                }
            }
            .recipes{
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: center;
                @media (min-width: 768px) {
                    justify-content: space-between;
            }
            }
            @media (min-width: 768px) {
                overflow-y: scroll;
                
            }
        }
    
    @media (min-width: 768px) {
        flex-direction: row;
        .img-bg{
           border-bottom: none;
           border-right: solid 2px #f05a28;
        }

        section{
            width: 100%;
        }
    }
}
    
</style>
