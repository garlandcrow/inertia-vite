<script>
    import { page } from "@inertiajs/inertia-svelte";

    $: console.log("page", $page);
</script>

<main>
    <h1>I am in layout</h1>
    <slot />
</main>
