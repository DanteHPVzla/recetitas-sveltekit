<script>
    import inactiveNav from '$lib/inactiveNav.svelte';
    import activeNav from '$lib/activeNav.svelte';
    import {auth} from '../firebase'; 
    import {activeSesion} from '../store';
    const navs = [
		{ sesion: 'inactive', component: inactiveNav },
		{ sesion: 'active',   component: activeNav   }
	];
    let sesion = navs[0];
    auth.onAuthStateChanged((user) => {
        if (user) {
            activeSesion.set(1);
            sesion = navs[1];
        }else{
            activeSesion.set(0)
            sesion = navs[0];
        }
        });
        
</script>

<div class="content">
    <svelte:component this={sesion.component} />
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