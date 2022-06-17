<!-- import todo-item svelte component -->
<script>
    import TodoItem from "../lib/todo-item.svelte";
</script>


<h1>About To Do</h1>
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<form action="" method="">
    <input type="text" name="text" aria-label="Add a To-Do" placeholder="+ type to add a to-do"/>
</form>

<!-- render todo-item -->
<TodoItem />
<TodoItem />
<TodoItem />
