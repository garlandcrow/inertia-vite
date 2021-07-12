<script>
    import { page } from "@inertiajs/inertia-svelte";

    import TestDipsatch from "../Components/TestDipsatch.svelte";

    $: console.log("pageProps", $page);
</script>

<h1 class="font-bold text-2xl">Welcome Page Component</h1>

<TestDipsatch
    on:testDispatch={({ detail }) => console.log("dispatched: ", detail)}
/>
