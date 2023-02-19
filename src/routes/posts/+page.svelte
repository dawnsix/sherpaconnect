<script lang="ts">
    import { supabaseClient } from '$lib/supabaseClient';
    import { fade, blur, fly, slide, scale } from 'svelte/transition'
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

    export let data: PageData;

    let { posts } = data;
    $: ({ posts } = data);

    let categories = [
      "All Events",
      "Trials of Osiris",
      "Raid",
      "Nightfall",
      "Grind",]
    
</script>

  <div class="flex flex-row h-full h-10">
    {#each categories as cat}
    <button class="border-solid border-2 w-1/5">
	    <span>{cat}</span>
    </button>
    {/each}
  </div>

  {#each posts as post, idx}

  <div class="card variant-glass p-4 m-2 h-40" in:fly={{
          x:-60,
          delay: 50 + idx * 50
      }}>
      
      <div class="flex flex-row h-full">

        <!-- first cell -->
        <div class="lg:w-1/6 bg-white">
            <p class="text-pink-700 font-bold">{post.gamertag}</p>
            <p class="text-pink-700 font-bold">{post.platform}</p>
            <h2 class="text-pink-700 font-bold">LOGO</h2>
        </div>


        <!-- second cell -->
        <div class="lg:w-4/6 mx-2">
            <h2 class="text-pink-700 font-bold">{post.title}</h2>
            <hr/>
            <span><p>Owner: {post.username}</p></span>
            <span><p>Category: {post.type}</p></span>
            <span><p>Available until: {post.lifespan}</p></span>
            <span><p>Description: {post.desc}</p></span>
      </div>

        <!-- third cell -->
        <div class="w-1/6 bg-pink-700">
            <span class="align-middle"><h2>${post.price}</h2></span>
            <hr />
            {#if post.username === data.session.user.user_metadata.username}
              <p></p>
            {:else}
              <button class="btn text-black bg-white hover:bg-pink-500 mt-2 fload-left">Accept offer</button>
            {/if}
        </div>

        </div>

  </div>

  {/each}
