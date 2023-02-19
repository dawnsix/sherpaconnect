<script lang="ts">
    import { fly } from 'svelte/transition'
    import { page } from '$app/stores';
    import type { PostCard } from "./$types"

    export let post: PostCard;
    export let idx: number;
    
</script>

<div class="card variant-glass p-4 m-2 h-40" in:fly={{
    x:-60,
    delay: 50 + idx * 50
}}>

  <div class="flex flex-row h-full">

    <div class="w-full">
        <h4 class="font-bold">[{post.gamertag}]<span class="text-pink-700">{post.title}</span></h4>
        <hr/>
        <span><p>Owner: {post.username}</p></span>
        <span><p>Category: {post.type}</p></span>
        <span><p>Available until: {post.lifespan}</p></span>
        <span><p>Description: {post.desc}</p></span>
    </div>

    <div class="w-1/6 border-l-2">
        <span class="align-middle"><h4 class="font-bold"><span class="text-pink-700">Price: </span>${post.price}</h4></span>
        <hr />
        {#if post.username === $page?.data.session?.user.user_metadata.username}
          <p>. . .</p>
        {:else}
          <button class="text-black bg-white hover:bg-pink-500 mt-2 fload-left">Accept offer</button>
        {/if}
    </div>

  </div>

</div>