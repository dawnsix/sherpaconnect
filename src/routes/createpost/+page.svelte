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
            
            <label for="postTitle"><b>Title</b></label>
            <input type="postTitle" placeholder="" name="postTitle" id="postTitle" required>
            {#if false}<span class="text-xs text-red-700">Title required</span>{/if}
        
            <label for="postDescription"><b>Description</b></label>
            <textarea class="textarea h-60" placeholder="Kings fall looking for 1, Quick trials run, etc." name="postDescription" id="postDescription" required />
            {#if false}<span class="text-xs text-red-700">Description required</span>{/if}
            
            <label for="price"><b>Price</b></label>
            <input type="price" class="w-24" placeholder="$00.00" name="price" id="price" required>
            {#if false}<span class="text-xs text-red-700">Price required</span>{/if}

            <br />
            <button type="submit" class="btn variant-filled-primary btn-base mt-3 mb-1 w-64">Create post</button>
          </div>
      </form> 
    </div>
    <div class="w-1/2 invisible lg:visible">
        
    </div>
  </div>