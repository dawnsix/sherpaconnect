<script lang="ts">
    import { fly } from 'svelte/transition'
    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import { Toast, toastStore } from '@skeletonlabs/skeleton';
    import { invalidateAll } from '$app/navigation';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    import type { ModalSettings } from '@skeletonlabs/skeleton';
    import type { PageData } from '../../routes/$types';
    import type { PostCard } from "./$types"
    import type { ToastSettings } from '@skeletonlabs/skeleton';

    export let post: Postcard;
    export let idx: number;

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

<div class="card variant-glass p-4 m-2 h-40" in:fly={{
    x:-60,
    delay: 50 + idx * 50
}}>

<div class="flex flex-row h-full">

  <div class="w-full">
      <h4 class="font-bold">[{post.gamertag}]<span class="text-pink-700">&#9733;{post.title}&#9733;</span></h4>
      <hr/>
      <span><p>Owner: {post.username}</p></span>
      <span><p>Category: {post.type}</p></span>
      <span><p>Available until: {post.lifespan}</p></span>
      <span><p>Description: {post.desc}</p></span>
  </div>

  <div class="w-1/6 bg-pink-700">
      <span class="align-middle"><p class="text-1xl">Asking price: ${post.price}</p></span>
      <hr />

      {#if post.username === $page?.data.session.user.user_metadata.username}
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