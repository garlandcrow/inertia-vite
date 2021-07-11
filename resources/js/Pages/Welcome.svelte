<script context="module">
    import Layout from "./_layout/_layout.svelte";
    export const layout = Layout;
</script>

<script>
    import { page } from "@inertiajs/inertia-svelte";

    import TestDipsatch from "../Components/TestDipsatch.svelte";
    $: console.log("pageFuck", $page);
</script>

<h1 class="font-bold text-2xl">Welcome</h1>

<TestDipsatch on:testDispatch={({ detail }) => console.log(detail)} />
