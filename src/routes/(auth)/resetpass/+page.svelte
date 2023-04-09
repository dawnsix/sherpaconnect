<script lang="ts">
    import { focusTrap } from '@skeletonlabs/skeleton';

    export let form: any;

  </script>

<!--
  <div class="flex flex-row h-full">
    <div class="w-1/2">
      <form action="resetpass" method="POST" class="p-10">
          <div use:focusTrap={true}>
            <h1>Password reset</h1>
            <hr>
        
            {#if form?.formErrors?.fieldErrors.rstpsw}
            <label for="rstpsw"><b>Enter new password</b></label>
            <input type="password" class="input-error" placeholder="xxxxxx" name="rstpsw" id="rstpsw" required>
            <span class="text-xs text-red-700">{form?.formErrors.fieldErrors.rstpsw}</span>
            {:else if form?.formErrors?.fieldErrors.rstpsw_confirm && !form?.formErrors.fieldErrors.rstpsw}
            <label for="rstpsw"><b>Enter new password</b></label>
            <input type="password" class="input-error" placeholder="xxxxxx" name="rstpsw" id="rstpsw" required>
            {:else}
            <label for="rstpsw"><b>Enter new password</b></label>
            <input type="password" placeholder="xxxxxx" name="rstpsw" id="rstpsw" required>
            {/if}
            <br />
            {#if form?.formErrors?.fieldErrors.rstpsw_confirm}
            <label for="rstpsw_confirm"><b>Confirm password</b></label>
            <input type="password" class="input-error" placeholder="xxxxxx" name="rstpsw_confirm" id="rstpsw_confirm" required>
          	<span class="text-xs text-red-700">{form?.formErrors.fieldErrors.rstpsw_confirm}</span>
            {:else}
            <label for="rstpsw_confirm"><b>Confirm password</b></label>
            <input type="password" placeholder="xxxxxx" name="rstpsw_confirm" id="rstpsw_confirm" required>
            {/if}
            <hr>
            <button type="submit" class="btn variant-filled-primary btn-base mt-3 mb-1 w-64">Submit</button>
          </div>
        </form> 
      </div>
      <div class="w-1/2 bg-pink-700">
          
      </div>
    </div>
    -->

    <div>
      <div class="h-screen flex flex-col items-center justify-center">
        <div class="bg-gray-700 w-4/6 h-96 grid md:grid-cols-2 grid-cols-1">
          
          <div>
    
            <div class="pt-3 pl-3 hover:cursor-pointer w-10" on:click={() => {window.location="/"}}>
              <svg height="30" viewBox="0 0 48 48" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
            </div>
    
            <form action="resetpass" method="POST" class="p-10">
              <div use:focusTrap={true}>
            
                {#if form?.formErrors?.fieldErrors.rstpsw}
                <label for="rstpsw"><b>Enter new password</b></label>
                <input type="password" class="input-error" placeholder="xxxxxx" name="rstpsw" id="rstpsw" required>
                <span class="text-xs text-red-700">{form?.formErrors.fieldErrors.rstpsw}</span>
                {:else if form?.formErrors?.fieldErrors.rstpsw_confirm && !form?.formErrors.fieldErrors.rstpsw}
                <label for="rstpsw"><b>Enter new password</b></label>
                <input type="password" class="input-error" placeholder="xxxxxx" name="rstpsw" id="rstpsw" required>
                {:else}
                <label for="rstpsw"><b>Enter new password</b></label>
                <input type="password" placeholder="xxxxxx" name="rstpsw" id="rstpsw" required>
                {/if}
                <br />
                {#if form?.formErrors?.fieldErrors.rstpsw_confirm}
                <label for="rstpsw_confirm"><b>Confirm password</b></label>
                <input type="password" class="input-error" placeholder="xxxxxx" name="rstpsw_confirm" id="rstpsw_confirm" required>
                <span class="text-xs text-red-700">{form?.formErrors.fieldErrors.rstpsw_confirm}</span>
                {:else}
                <label for="rstpsw_confirm"><b>Confirm password</b></label>
                <input type="password" placeholder="xxxxxx" name="rstpsw_confirm" id="rstpsw_confirm" required>
                {/if}
                <hr>
                <button type="submit" class="btn variant-filled-primary btn-base mt-3 mb-1 w-64 w-1/2">Submit</button>
              </div>
            </form> 
          </div>
    
          <div class="md:bg-accent-500">
            <div class="flex h-full justify-center items-center invisible md:visible">
              <div class="text-center">
                  <h3 class="text-3xl font-bold">Find your next <span class="text-white dark:text-black">fireteam</span></h3>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>