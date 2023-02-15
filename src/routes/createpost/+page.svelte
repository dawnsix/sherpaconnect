<script lang="ts">
    import { focusTrap } from '@skeletonlabs/skeleton';
  
    export let form: any;
    console.log(form)
  
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
              <input type="text" class="input-error" placeholder="" name="postTitle" id="postTitle" value={form?.data.postTitle ?? ''} required>
              <span class="text-xs text-red-700">{form?.formErrors?.fieldErrors.postTitle}</span>
            {:else}
              <label for="postTitle"><b>Title</b></label>
              <input type="text" placeholder="" value={form?.data.postTitle ?? ''} name="postTitle" id="postTitle" required>
            {/if}

            {#if form?.formErrors?.fieldErrors.category}
              <label for="category"><b>Category</b></label>
              <!--fix category retention on for validation failure-->
              <select name="category" id="category">
                <option value="trials">Trials of Osiris</option>
                <option value="raid">Raid</option>
                <option value="nightfall">Nightfall</option>
                <option value="grind">Strikes / Grind</option>
              </select> 
              <span class="text-xs text-red-700">{form?.formErrors?.fieldErrors.category}</span>
            {:else}
              <label for="category"><b>Category</b></label>
              <select name="category" id="category">
                <option value="trials">Trials of Osiris</option>
                <option value="raid">Raid</option>
                <option value="nightfall">Nightfall</option>
                <option value="grind">Strikes / Grind</option>
              </select> 
            {/if}
        
            {#if form?.formErrors?.fieldErrors.postDescription}
              <label for="postDescription"><b>Description</b></label>
              <textarea class="textarea h-60 input-error" placeholder="Kings fall looking for 1, Quick trials run, etc." value={form?.data.postDescription ?? ''} name="postDescription" id="postDescription" required />
              <span class="text-xs text-red-700">{form?.formErrors?.fieldErrors.postDescription}</span>
            {:else}
              <label for="postDescription"><b>Description</b></label>
              <textarea class="textarea h-60" placeholder="Kings fall looking for 1, Quick trials run, etc." value={form?.data.postDescription ?? ''} name="postDescription" id="postDescription" required />
            {/if}

            <div class="flex flex-row h-full">
              <div class="lg:w-1/2">

                {#if form?.formErrors?.fieldErrors.endtime}
                  <label for="endtime"><b>Offer end time</b></label>
                  <input type="time" class="mr-1 input-error" placeholder="" value={form?.data.endtime ?? ''} name="endtime" id="endtime" required>
                  <span class="text-xs text-red-700">{form?.formErrors?.fieldErrors.endtime}</span>
                {:else}
                  <label for="endtime"><b>Offer end time</b></label>
                  <input type="time" class="mr-1" placeholder="" value={form?.data.endtime ?? ''} name="endtime" id="endtime" required>
                {/if}
                
              </div>
              <div class="lg:w-1/2">
              
                {#if form?.formErrors?.fieldErrors.price}
                  <label for="price"><b>Price ($)</b></label>
                  <input type="number" min="1" step="any" class="ml-1 input-error" placeholder="$00.00" value={form?.data.price ?? ''} name="price" id="price" required>
                  <span class="text-xs text-red-700">{form?.formErrors?.fieldErrors.price}</span>
                {:else}
                  <label for="price"><b>Price ($)</b></label>
                  <input type="number" class="ml-1" placeholder="$00.00" value={form?.data.price ?? ''} name="price" id="price" required>
                {/if}

              </div>
            </div>

            <br />
            <button type="submit" class="btn variant-filled-primary btn-base mt-3 mb-1 w-64">Create post</button>
          </div>
      </form> 
    </div>
    <div class="w-1/2 invisible lg:visible">
        
    </div>
  </div>