<script lang="ts">
  import TabGroup from '$lib/components/tabGroup.svelte';
	import Tab from '$lib/components/tab.svelte';
  import PostCard from '$lib/components/postcard.svelte';


  export let data: any;

  let tabSet: number = 0;

  let { posts } = data;
  $: ({ posts } = data);

  let categories = [
    "All Events",
    "nightfall",
    "raid",
    "trials",
    "grind"
  ]

  let targetType: string = categories[0]
  $: filterPosts = posts.filter(function (item: PostCard) {
    return targetType === categories[0] ? item : item.type === targetType
  })

  let capFirst = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

</script>

<div class="card variant-glass p-4 space-y-4">
  <TabGroup>
  
    {#each categories as cat, idx}
    <Tab bind:group={tabSet} name={cat} value={idx} 
      on:click={() => { targetType = cat }}>{capFirst(cat)}</Tab>
    {/each}

    <svelte:fragment slot="panel">
      
      {#each filterPosts as postItem, index}
        <PostCard post={postItem} idx={index} />
      {/each}

    </svelte:fragment>
    
  </TabGroup>
</div>