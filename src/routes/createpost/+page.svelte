<script lang="ts">
    import { focusTrap } from '@skeletonlabs/skeleton';
    import { attr, select_value } from 'svelte/internal';
    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
    import { any } from 'zod';

    export let form: any;

    let platformTarget: string = form?.data?.platform ? form.data.platform : "ps";
    let subclassSingle: string = form?.data?.subclass ? form.data.subclass : "hunter";

    let categories = [
      {key: 'trials', value: 'Trials of Osiris'},
      {key: 'raid', value: 'Raid'},
      {key: 'nightfall', value: 'Nightfall'},
      {key: 'grind', value: 'Strikes / Grind'}
    ]
    
    //hacks
    $: psbg = platformTarget === "ps" ? "bg-accent-400 text-black" : ""
    $: xbbg = platformTarget === "xbox" ? "bg-accent-400 text-black" : ""
    $: pcbg = platformTarget === "pc" ? "bg-accent-400 text-black" : ""

    $: htbg = subclassSingle === "hunter" ? "bg-accent-400 text-black" : ""
    $: ttbg = subclassSingle === "titan" ? "bg-accent-400 text-black" : ""
    $: wlbg = subclassSingle === "warlock" ? "bg-accent-400 text-black" : ""

  </script>
  
  <div class="flex flex-row h-full">
    <div class="lg:w-1/2">
      <form action="/createpost" method="POST" class="p-10">
          <div use:focusTrap={true}>
            <h1>Create post</h1>
            <p>Enter your details to create a carry ticket...</p>
            <hr>
            
            {#if form?.formErrors?.fieldErrors.postTitle}
              <label for="postTitle"><b>Title</b></label>
              <input type="text" class="input-error" placeholder="" name="postTitle" id="postTitle" value={form?.data?.postTitle ?? ''} required>
              <span class="text-xs text-red-700 ml-3">{form?.formErrors?.fieldErrors.postTitle}</span>
            {:else}
              <label for="postTitle"><b>Title</b></label>
              <input type="text" placeholder="" value={form?.data?.postTitle ?? ''} name="postTitle" id="postTitle" required>
            {/if}

            <!--platform selector-->
            <div class="flex flex-row h-full h-20 py-5">
              <button type="button" class="w-1/3 hover:bg-accent-400 hover:text-black {psbg}" on:click={() => { platformTarget = "ps" }}>
                <span>PLAYSTATION</span>
              </button>
              <button type="button" class="w-1/3 hover:bg-accent-400 hover:text-black {xbbg}" on:click={() => { platformTarget = "xbox" }}>
                <span>XBOX</span>
              </button>
              <button type="button" class="w-1/3 hover:bg-accent-400 hover:text-black {pcbg}" on:click={() => { platformTarget = "pc" }}>
                <span>PC</span>
              </button>
            </div>
            
            <input type="hidden" id="platform" name="platform" value="{platformTarget}">

            {#if form?.formErrors?.fieldErrors.gamertag}
              <label for="gamertag"><b>Gamertag</b></label>
              <input type="text" class="input-error" placeholder="" name="gamertag" id="gamertag" value={form?.data?.gamertag ?? ''} required>
              <span class="text-xs text-red-700 ml-3">{form?.formErrors?.fieldErrors.gamertag}</span>
            {:else}
              <label for="gamertag"><b>Gamertag</b></label>
              <input type="text" placeholder="" value={form?.data?.gamertag ?? ''} name="gamertag" id="gamertag" required>
            {/if}

            {#if form?.formErrors?.fieldErrors.category}

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
        
            {#if form?.formErrors?.fieldErrors.postDescription}
              <label for="postDescription"><b>Description</b></label>
              <textarea class="textarea h-60 input-error" placeholder="Kings fall looking for 1, Quick trials run, etc." value={form?.data?.postDescription ?? ''} name="postDescription" id="postDescription" required />
              <span class="text-xs text-red-700 ml-3">{form?.formErrors?.fieldErrors.postDescription}</span>
            {:else}
              <label for="postDescription"><b>Description</b></label>
              <textarea class="textarea h-60" placeholder="Kings fall looking for 1, Quick trials run, etc." value={form?.data?.postDescription ?? ''} name="postDescription" id="postDescription" required />
            {/if}

            <br />
            <br />
            <hr />
            <br />

            <div class="flex flex-row h-full">
              <div class="lg:w-1/2">

                <!--
                {#if form?.formErrors?.fieldErrors.endtime}
                  <label for="endtime"><b>Offer end time</b></label>
                  <input type="time" class="mr-1 input-error" placeholder="" value={form?.data?.endtime ?? ''} name="endtime" id="endtime" required>
                  <span class="text-xs text-red-700 ml-3">{form?.formErrors?.fieldErrors.endtime}</span>
                {:else}
                  <label for="endtime"><b>Offer end time</b></label>
                  <input type="time" class="mr-1" placeholder="" value={form?.data?.endtime ?? ''} name="endtime" id="endtime" required>
                {/if}
                -->

                <label for="subclassDescription"><b>Your subclass</b></label>
                <ListBox id="temp">
                  <ListBoxItem class="hover:bg-accent-500 hover:text-black mr-2 {htbg}" bind:group={subclassSingle} on:click={() => { subclassSingle='hunter' }} name="medium" value="hunter">&#183; Hunter</ListBoxItem>
                  <ListBoxItem class="hover:bg-accent-500 hover:text-black mr-2 {ttbg}" bind:group={subclassSingle} on:click={() => { subclassSingle='titan' }} name="medium" value="titan">&#183; Titan</ListBoxItem>
                  <ListBoxItem class="hover:bg-accent-500 hover:text-black mr-2 {wlbg}" bind:group={subclassSingle} on:click={() => { subclassSingle='warlock' }} name="medium" value="warlock">&#183; Warlock</ListBoxItem>
                </ListBox>

                <input type="hidden" id="subclass" name="subclass" value="{subclassSingle}">
                
              </div>
              
              <div class="lg:w-1/2">
              
                {#if form?.formErrors?.fieldErrors.price}
                  <label for="price"><b>Price ($)</b></label>
                  <input type="number" min="1" step="any" class="ml-1 input-error" placeholder="$00.00" value={form?.data?.price ?? ''} name="price" id="price" required>
                  <span class="text-xs text-red-700 ml-3">{form?.formErrors?.fieldErrors.price}</span>
                {:else}
                  <label for="price"><b>Price (AUD)</b></label>
                  <input type="number" class="ml-1" placeholder="$00.00" value={form?.data?.price ?? ''} name="price" id="price" required>
                {/if}

              </div>
            </div>

            <br />
            <hr />
            <button type="submit" class="btn variant-filled-primary btn-base mt-3 mb-1 w-64 hover:bg-accent-400">Create post</button>
          </div>
      </form> 
    </div>
    <div class="w-1/2 invisible lg:visible">
        
    </div>
  </div>