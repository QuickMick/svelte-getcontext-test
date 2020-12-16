<script>
  import { getContext } from "svelte";

  const { printConsole } = getContext("test");

  function click() {
    printConsole();
  }
</script>

<button on:click={click}> call context function </button>
