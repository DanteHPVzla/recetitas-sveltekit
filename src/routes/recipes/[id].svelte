<script>
    //valores
    let title = 'titulo';
    let img = '/img/bg_1.jpg';
    let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, deserunt quam id quibusdam dolorum fuga numquam nihil et, nisi illum quos debitis ducimus temporibus quas aliquam accusantium reprehenderit sapiente quod.";
    let duration = 0;
    let dificulty = 'As easy as ur sister';
    let ingredients = ['atun','mas atun','aun mas atun'];
    let steps = ['sazonar elatun','cocinar el atun','comer el atun'];
    let stars = 0;
</script>

<div class="container">
    <div class="title-space">
        <img src={img} alt="">
        <header>{title}</header>
        <span>{stars}/5</span>
    </div>
    <div class="recipe-container">
        <div class="meta-container">
            <p><span>Dificultad: </span>{dificulty}</p>
            <p><span>Duraci&oacute;n:</span> {duration} min </p>
        </div>
        <p>{description}</p>
        <div class="title-container">
            <h4>Ingredientes</h4>
            <div class='linea'></div>
        </div>
        
        {#each ingredients as item, i}
             <!-- content here -->
            <p>{i + 1}. {item}</p>
        {/each}

        <div class="title-container">
            <h4>Instrucciones</h4>
            <div class='linea'></div>
        </div>

        {#each steps as item, i}
             <!-- content here -->
            <p>{i + 1}. {item}</p>
        {/each}

    </div>
</div>

<style lang="scss">
    .container{
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
        .title-space{
            width: 100%;
            height: 400px;
            position: relative;
            font-weight: bold;
            color: white;
            font-size: 2em;
            border-bottom: solid 4px #f05a28;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
            }
            header{
                position: absolute;
                top: 20px;
                left: 20px;
                z-index: 1;
                text-transform: uppercase;
                font-weight: bold;
            }
            span{
                position: absolute;
                bottom: 20px;
                right: 20px;
                z-index: 1;
            }
            &::after{
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba($color: #000000, $alpha: .3);
            }
        }
        .recipe-container{
            max-width: 900px;
            padding: 30px;
            .meta-container{
                margin-bottom: 10px;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                font-size: 14px;
                span{
                    font-weight: bold;
                }
            }
            .title-container{
                display: flex;
                align-items: center;
                margin: 20px 0;
                h4{
                    font-size: 1.5em;
                    margin-right: 4px;
                }
                .linea{
                    width: 100%;
                    border-top: dashed 3px #f05a28;
                }
            }
        }
    }
</style>