<script lang="ts">
    import { supabaseClient } from '$lib/supabaseClient';
    import { fade, blur, fly, slide, scale } from 'svelte/transition'
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import { Toast, toastStore } from '@skeletonlabs/skeleton';
    import { invalidateAll } from '$app/navigation';
    import { goto } from '$app/navigation';
    import ModalForm from '$lib/components/modalform.svelte';

    import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
    import type { ToastSettings } from '@skeletonlabs/skeleton';

    export let data: any;
    
    let { posts } = data;
    $: ({ posts } = data);

    /*// Edit form modal
    export let targetForm: object | null;
    let handleEdit = async (targetPost: object) => {
      data.targetPost = targetPost;

      const c: ModalComponent = { ref: ModalForm };
      const d: ModalSettings = {
        type: 'component',
        title: 'Edit post',
        body: 'Update the details of your post...',
        component: c,
        response: (r: any) => {
          if (r) console.log('response:', r);
        }
      };
      modalStore.trigger(d);
      targetForm = null;
    }
    */

    let handleEdit = (targetPost: number) => {
      goto('/editpost?id=' + targetPost) 
    }

    let handleDelete = async (id: number) => {
      const alert: ModalSettings = {
        type: 'confirm',
        title: 'Delete post',
        body: 'Are you sure you wish to delete this post?',
        buttonTextCancel: 'Cancel',
        response: (r: boolean) => {
				  if (r) deletePost(id)
			  }
      }
      modalStore.trigger(alert)
    }

    let deletePost = async (postid: number) => {

      let response = await fetch("/myposts", { 
        method: 'POST', 
        body: JSON.stringify({post_id: postid})
      })

      if(response.status === 500) 
        triggerToast('Issue encountered when deleting your post. Please try again later.', "warning")
      else {
        triggerToast('Post deleted successfully.', "primary")
        invalidateAll()
      }

    }

    function triggerToast(msg: string, toastType: "primary" | "warning"): void {
      const t: ToastSettings = {
        message: msg,
        preset: toastType,
        autohide: true,
        timeout: 5000,
      };
      toastStore.trigger(t);
    }

</script>

<Modal />

<div class="h-20 text-center">
  <h1>My posts</h1>
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
          <span><p>Category: {post.type}</p></span>
          <span><p>Available until: {post.lifespan}</p></span>
          <span><p>Description: {post.desc}</p></span>
    </div>

      <!-- third cell -->
      <div class="w-1/6 bg-pink-700">
          <span class="align-middle"><p class="text-1xl">Asking price: ${post.price}</p></span>
          <hr />

          {#if post.username === data.session.user.user_metadata.username}
            <div class="bg-pink-400 flex-1">
              <button class="text-1xl"
                on:click={() => { handleEdit(post.id) }}> Edit post </button>
              <br />
              <button class="text-1xl" 
                on:click={() => { handleDelete(post.id) }}> Delete </button>
            </div>
          {:else}
            <button class="btn text-black bg-white hover:bg-pink-500 mt-2 fload-left">Accept offer</button>
          {/if}
      </div>

      </div>

</div>

{/each}
