<script>
    // import todo-item svelte component
    // can replace ../ with $
    import TodoItem from "../lib/todo-item.svelte";
    // varaible to store page title
    const pagetitle = "About To-Do";
</script>

<style>
    /* overall */
    .todos{
        width: 100%;
        /* height: 70%; */
        max-width: 42rem;
        margin: 5rem auto 0 auto;
    }
    
    /* hidden input */
    .hidinput{
        font-family:'Courier New', Courier, monospace;
    }

    /* new to do  */
    .new{
        margin: 0 0 1.5rem 0;
        width: 91%;
    }

    /* new to do input */
    .new input{
        font-size: 28px;
        width: 100%;
        padding: 0.5em 1em 0.3em 1.0em;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        text-align: center;
    }

    /* to do global input */
    .todos :global(input){
        border: 1px solid transparent;
    }

    /* add box shadow to add a new todo */
    .todos :global(input:focus-visible){
        box-shadow: inset 1px 1px 6px rgba(0,0,0,0.1);
        border: 1px solid #00000000 !important;
        outline: none;
    }

</style>  

<!-- dynamically populate head  -->
<svelte:head>
    <title>{pagetitle}</title>
</svelte:head>

<div class="todos">
    <h1>{pagetitle}</h1>
    <!-- Visit https://kit.svelte.dev to read the documentation -->

    <form action="" method="" class="new">
        <input type="text" name="text" aria-label="Add a To-Do" placeholder="+ add a new to-do ^_^" class="hidinput"/>
    </form>

    <!-- render todo-item -->
    <TodoItem />
    <TodoItem />
    <TodoItem />

    <br>
    
    <footer>
        © 2022 All rights reserved.
    </footer>
</div>


