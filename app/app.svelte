<script>
  import { setContext } from "svelte";
  import { Button } from "library";

  setContext("test", {
    printConsole: () => console.log("called from context"),
  });
</script>

<style>
</style>

<Button />
