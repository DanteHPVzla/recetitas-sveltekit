<script>
    import Nav from '$lib/nav.svelte' 
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
    }
</style>