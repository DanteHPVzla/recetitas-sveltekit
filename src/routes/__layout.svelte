<script>
    import Nav from '$lib/nav.svelte';
    import {auth} from '../firebase'; 
    import {activeSesion} from '../store';

    auth.onAuthStateChanged((user) => {
        if (user) {
            activeSesion.set(1)
            console.log("usuario activo")
        }else{
            activeSesion.set(0)
            console.log("usuario inactivo")
        }
        });
        
</script>

<div class="content">
    <Nav/>
    <slot></slot>
</div>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Work+Sans&display=swap');
    :global(*){
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    :global(body){
        font-family: 'Work Sans', sans-serif;
        font-size: 16px;
        background-color: #F7931E;
    }
</style>