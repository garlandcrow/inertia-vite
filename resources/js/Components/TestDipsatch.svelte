<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("testDispatch", "it worked");
    }
</script>

<div class="bg-blue-300 p-4 m-6" on:click={handleClick}>click me</div>
