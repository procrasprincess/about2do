<!-- import todo-item svelte component -->
<script>
    // can replace ../ with $
    import TodoItem from "../lib/todo-item.svelte";
    // varaible to store page title
    const pagetitle = "About To-Do";
</script>

<!-- dynamically populate head  -->
<svelte:head>
    <title>{pagetitle}</title>
</svelte:head>

<h1>{pagetitle}</h1>
<!-- Visit https://kit.svelte.dev to read the documentation -->

<form action="" method="">
    <input type="text" name="text" aria-label="Add a To-Do" placeholder="+ type to add a to-do"/>
</form>

<!-- render todo-item -->
<TodoItem />
<TodoItem />
<TodoItem />
