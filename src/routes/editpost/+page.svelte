<script lang="ts">
    import { focusTrap } from '@skeletonlabs/skeleton';
    import { attr, select_value } from 'svelte/internal';

    export let data: any;
    export let form: any;

    let { formState } = data
    let { tgtId } = data

    let platformTarget: string = formState ? formState.platform : "ps";

    let categories = [
      { key: 'trials', value: 'Trials of Osiris' },
      { key: 'raid', value: 'Raid' },
      { key: 'nightfall', value: 'Nightfall' },
      { key: 'grind', value: 'Strikes / Grind' }
    ]
    
    $: psbg = platformTarget === "ps" ? "bg-pink-700" : ""
    $: xbbg = platformTarget === "xbox" ? "bg-pink-700" : ""
    $: pcbg = platformTarget === "pc" ? "bg-pink-700" : ""

  </script>
  
  <div class="flex flex-row h-full">
    <div class="lg:w-1/2">
      <form action="/editpost" method="POST" class="p-10">
          <div use:focusTrap={true}>
            <h1>Edit post</h1>
            <p>Enter your details to edit your ticket...</p>
            <hr>
            
            {#if formState}
              <label for="postTitle"><b>Title</b></label>
              <input type="text" placeholder="" value={formState.title} name="postTitle" id="postTitle" required>
            {:else if form?.formErrors?.fieldErrors.postTitle}
              <label for="postTitle"><b>Title</b></label>
              <input type="text" class="input-error" placeholder="" name="postTitle" id="postTitle" value={form?.data?.postTitle ?? ''} required>
              <span class="text-xs text-red-700 ml-3">{form?.formErrors?.fieldErrors.postTitle}</span>
            {:else}
              <label for="postTitle"><b>Title</b></label>
              <input type="text" placeholder="" value={form?.data?.postTitle ?? ''} name="postTitle" id="postTitle" required>
            {/if}

            <!--platform selector-->
            <div class="flex flex-row h-full h-20 py-5">
              <button type="button" class="w-1/3 hover:bg-pink-700 {psbg}" on:click={() => { platformTarget = "ps" }}>
                <span>PLAYSTATION</span>
              </button>
              <button type="button" class="w-1/3 hover:bg-pink-700 {xbbg}" on:click={() => { platformTarget = "xbox" }}>
                <span>XBOX</span>
              </button>
              <button type="button" class="w-1/3 hover:bg-pink-700 {pcbg}" on:click={() => { platformTarget = "pc" }}>
                <span>PC</span>
              </button>
            </div>
            
            <input type="hidden" id="platform" name="platform" value="{platformTarget}">
            <input type="hidden" id="targetId" name="targetId" value="{tgtId ?? form?.data?.targetId}">

            {#if formState}
              <label for="gamertag"><b>Gamertag</b></label>
              <input type="text" placeholder="" value={formState.gamertag} name="gamertag" id="gamertag" required>
            {:else if form?.formErrors?.fieldErrors.gamertag}
              <label for="gamertag"><b>Gamertag</b></label>
              <input type="text" class="input-error" placeholder="" name="gamertag" id="gamertag" value={form?.data?.gamertag ?? ''} required>
              <span class="text-xs text-red-700 ml-3">{form?.formErrors?.fieldErrors.gamertag}</span>
            {:else}
              <label for="gamertag"><b>Gamertag</b></label>
              <input type="text" placeholder="" value={form?.data?.gamertag ?? ''} name="gamertag" id="gamertag" required>
            {/if}

            {#if formState}
              <label for="category"><b>Category</b></label>
              <select name="category" id="category" value={formState.type}>
                {#each categories as cat}<option value="{cat.key}">{cat.value}</option>{/each}
              </select> 
            {:else if form?.formErrors?.fieldErrors.category}
              <label for="category"><b>Category</b></label>
              <select name="category" id="category" value={form?.data?.category ?? 'trials'}>
                {#each categories as cat}<option value="{cat.key}">{cat.value}</option>{/each}
              </select> 
              <span class="text-xs text-red-700">{form?.formErrors?.fieldErrors.category}</span>
            {:else}
              <label for="category"><b>Category</b></label>
              <select name="category" id="category" value={form?.data?.category ?? 'trials'}>
                {#each categories as cat}<option value="{cat.key}">{cat.value}</option>{/each}
              </select> 
            {/if}
        
            {#if formState}
              <label for="postDescription"><b>Description</b></label>
              <textarea class="textarea h-60" placeholder="Kings fall looking for 1, Quick trials run, etc." value={formState.desc} name="postDescription" id="postDescription" required />
            {:else if form?.formErrors?.fieldErrors.postDescription}
              <label for="postDescription"><b>Description</b></label>
              <textarea class="textarea h-60 input-error" placeholder="Kings fall looking for 1, Quick trials run, etc." value={form?.data?.postDescription ?? ''} name="postDescription" id="postDescription" required />
              <span class="text-xs text-red-700 ml-3">{form?.formErrors?.fieldErrors.postDescription}</span>
            {:else}
              <label for="postDescription"><b>Description</b></label>
              <textarea class="textarea h-60" placeholder="Kings fall looking for 1, Quick trials run, etc." value={form?.data?.postDescription ?? ''} name="postDescription" id="postDescription" required />
            {/if}

            <div class="flex flex-row h-full">
              <div class="lg:w-1/2">

                {#if formState}
                  <label for="endtime"><b>Offer end time</b></label>
                  <input type="time" class="mr-1" placeholder="" value={formState.lifespan} name="endtime" id="endtime" required>
                {:else if form?.formErrors?.fieldErrors.endtime}
                  <label for="endtime"><b>Offer end time</b></label>
                  <input type="time" class="mr-1 input-error" placeholder="" value={form?.data?.endtime ?? ''} name="endtime" id="endtime" required>
                  <span class="text-xs text-red-700 ml-3">{form?.formErrors?.fieldErrors.endtime}</span>
                {:else}
                  <label for="endtime"><b>Offer end time</b></label>
                  <input type="time" class="mr-1" placeholder="" value={form?.data?.endtime ?? ''} name="endtime" id="endtime" required>
                {/if}
                
              </div>
              <div class="lg:w-1/2">
              
                {#if formState}
                  <label for="price"><b>Price ($)</b></label>
                  <input type="number" class="ml-1" placeholder="$00.00" value={formState.price} name="price" id="price" required>
                {:else if form?.formErrors?.fieldErrors.price}
                  <label for="price"><b>Price ($)</b></label>
                  <input type="number" min="1" step="any" class="ml-1 input-error" placeholder="$00.00" value={form?.data?.price ?? ''} name="price" id="price" required>
                  <span class="text-xs text-red-700 ml-3">{form?.formErrors?.fieldErrors.price}</span>
                {:else}
                  <label for="price"><b>Price ($)</b></label>
                  <input type="number" class="ml-1" placeholder="$00.00" value={form?.data?.price ?? ''} name="price" id="price" required>
                {/if}

              </div>
            </div>

            <br />
            <button type="submit" class="btn variant-filled-primary btn-base mt-3 mb-1 w-64">Update post</button>
            <br />
            <button type="button" on:click={() => { window.location.href = "/myposts" }} class="btn variant-filled-primary btn-base w-64">Cancel</button>
          </div>
      </form> 
    </div>
    <div class="w-1/2 invisible lg:visible">
        
    </div>
  </div>