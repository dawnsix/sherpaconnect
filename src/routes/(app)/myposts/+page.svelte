<script lang="ts">
  import PostCardLocal from '$lib/components/postcardlocal.svelte';

  export let data: any;
  
  let { posts } = data;
  $: ({ posts } = data);

</script>

<div class="h-10 text-center">
  <h2 class="font-bold">My posts</h2>
</div>

{#each posts as postItem, index}
  <PostCardLocal post={postItem} idx={index} />
{/each}
