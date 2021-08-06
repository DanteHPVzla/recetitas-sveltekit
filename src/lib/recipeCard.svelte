<script>
    let img = "https://placekitten.com/200/300";
    let title = "Titulo";
    //TODO: ponle a la descripcion un maximo de caracteres a mostrar
    let description = '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ut recusandae iusto, quaerat tempore dolorum eligendi? Suscipit corporis tempora eum error, deleniti porro, eaque perspiciatis ducimus, sequi id dignissimos debitis!'
    let stars = 0;
</script>

<div class="card">
    <div class="img">
        <p>{title}</p>
        <img src={img} alt="">
    </div>
    <p class="descripcion">{description}</p>
    <p class="stars">{stars}/5</p>
</div>

<style lang="scss">
    .card{
        width: 300px;
        height: 400px;
        background: white;
        box-shadow: 4px 4px 12px rgba($color: #000000, $alpha: .5);
        margin-bottom: 30px;
        overflow: hidden;
        position: relative;
        .img{
            height: 200px;
            overflow: hidden;
            border-bottom: solid 4px #f05a28;
            position: relative;
            p{
                position: absolute;
                color: #f05a28;
                font-weight: bold;
                padding: 4px 8px;
                font-size: 1.5em;
                bottom: 0;
            }
            img{
                object-fit: cover;
                width: 100%;
            }
        }
        .descripcion{
            padding: 8px 20px;
        }
        .stars{
            position: absolute;
            color: #f05a28;
            font-weight: bold;
            font-size: 1.2em;
            bottom: 20px;
            right: 20px;
        }
    }
</style>