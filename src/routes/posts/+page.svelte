<script lang="ts">
    import { supabaseClient } from '$lib/supabaseClient';
    import { fade, blur, fly, slide, scale } from 'svelte/transition'
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';

    export let data: any;

    let getPosts = async () => {

        let res = await supabaseClient
            .from('posts')
            .select('title, desc, username, price, created_at')
            .order('created_at',  { ascending: false });

        return res.data
    }

    let getPostsPromise: Promise<any> = getPosts()

</script>

{#await getPostsPromise}
    <div class="grid place-items-center">
        <!--<h2 class="pt-5"><b>Loading</b></h2>-->
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
{:then posts}

  <div class="flex flex-row h-full h-10">
    <button class="border-solid border-2 w-1/4 ml-2">
	    <span>TRIALS OF OSIRIS</span>
    </button>
    <button class="border-solid border-2 w-1/4">
	    <span>RAID</span>
    </button>
    <button class="border-solid border-2 w-1/4">
	    <span>NIGHTFALL</span>
    </button>
    <button class="border-solid border-2 w-1/4 mr-2">
	    <span>GRIND</span>
    </button>
  </div>


    {#each posts as post, idx}

    <div class="card variant-glass p-4 m-2 h-40" in:fly={{
            x:-60,
            delay: 50 + idx * 50
        }}>
        
        <div class="flex flex-row h-full">

          <!-- first cell -->
          <div class="lg:w-1/6 bg-white">
              <h2 class="text-pink-700 font-bold">LOGO</h2>
          </div>


          <!-- second cell -->
          <div class="lg:w-4/6 mx-2">
              <h2 class="text-pink-700 font-bold">{post.title}</h2>
              <hr/>

              <span>Post created by: {JSON.stringify(post.username)}</span>
        </div>

          <!-- third cell -->
          <div class="w-1/6 bg-pink-700">
              <span class="align-middle"><h2>${post.price}</h2></span>
          </div>

          </div>

    </div>

    {/each}

{/await}

<style>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #dd0093;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>