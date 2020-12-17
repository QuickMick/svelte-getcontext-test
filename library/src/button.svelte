<script>
  import { getContext } from "svelte";

  const { printConsole } = getContext("test");

  function click() {
    printConsole();
  }
</script>

<style>
  /** when you comment following style out, everything works fine*/
  .btn-class {
    width: 100px;
    color: red;
    outline: 0;
  }
</style>

<button class="btn-class" on:click={click}> call context function </button>
