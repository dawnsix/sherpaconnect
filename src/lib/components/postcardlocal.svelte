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

    let postedWhen = (post: PostCard) => {
      let deltaMs = Date.now() - post.epoch

      let totalSeconds = parseInt(Math.floor(deltaMs / 1000), 10);
      let totalMinutes = parseInt(Math.floor(totalSeconds / 60), 10);

      return totalMinutes
    }

</script>

<Modal />

<div class="card variant-glass p-4 m-2 h-40" in:fly={{
    x:-60,
    delay: 50 + idx * 50
}}>

<div class="flex flex-row h-full">

  <div class="w-full">
    <div class="flex flex-row">
      <div class="mt-2.5">
        {#if post.platform === "ps"}
        <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E46F4C" class="bi bi-playstation" viewBox="0 0 16 16">
          <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356ZM9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.454 8.454 0 0 1-4.018-.323Z"/>
        </svg></i>
        {/if}
        {#if post.platform === "xbox"}
        <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E46F4C" class="bi bi-xbox" viewBox="0 0 16 16">
          <path d="M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z"/>
        </svg></i>
        {/if}
        {#if post.platform === "pc"}
        <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E46F4C" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
          <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
        </svg></i>
        {/if}
      </div>

      <h4 class="font-bold">&nbsp;<span class="text-accent-500">{post.title}</span></h4>
    </div>
      
    <hr/>
    <p><span class="font-bold">Category: </span><span class="text-accent-500">{post.type}</span></p>
    <p><span class="font-bold">Description: </span></p>
    <p class="pl-5"><span class="text-accent-500">{post.desc}</span></p>
</div>

<div class="w-1/6 border-l-2 h-full">
  <p>
    {#if postedWhen(post) >= 60}
      <span class="text-sm text-gray-800 dark:text-gray-400">&nbsp;Posted over an hour ago</span>
    {:else if postedWhen(post) <= 5}
      <span class="text-sm text-accent-300 dark:text-accent-500"><span class="animate-ping">&#x1F7E2;</span> Posted {postedWhen(post)}m ago</span>
    {:else}
      <span class="text-sm">&nbsp;Posted {postedWhen(post)}m ago</span>
    {/if}</p>
  <hr />
  {#if post.username === $page?.data.session?.user.user_metadata.username}
    <button type="button" class="hover:text-accent-500 mt-2 pl-1 text-sm"  on:click={() => { handleEdit(post.id) }}>&#183; Edit post</button>
    <br />
    <button type="button" class="hover:text-red-600 pl-1 text-sm"  on:click={() => { handleDelete(post.id) }}>&#183; Delete posts</button>
  {:else}
    <button type="button" class="hover:text-accent-500 pl-1 text-sm"><h5>Accept offer</h5></button>
  {/if}
  <div class="flex flex-col pt-5 mr-0.5">
    <span>
      <h4 class="font-bold float-right mr-1">
        <span class="text-accent-500">&nbsp;Price: 
        </span>${post.price}
      </h4>
    </span>
  </div>
</div>

<!--
  <div class="w-1/6 bg-accent-500">
      <span class="align-middle"><p class="text-1xl text-black">Asking price: ${post.price}</p></span>
      <hr />

      {#if post.username === $page?.data.session.user.user_metadata.username}
        <div class="bg-accent-300 flex-1">
          <button class="text-1xl text-black"
            on:click={() => { handleEdit(post.id) }}> Edit post </button>
          <br />
          <button class="text-1xl text-black" 
            on:click={() => { handleDelete(post.id) }}> Delete </button>
        </div>
      {:else}
        <button class="btn text-black bg-white hover:bg-accent-500 mt-2 fload-left">Accept offer</button>
      {/if}
  </div>

  </div>
  -->
</div>
</div>