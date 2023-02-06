<script lang="ts">
    import { focusTrap } from '@skeletonlabs/skeleton';

    export let form: any;
  
  </script>
  
  <div class="flex flex-row h-full">
    <div class="w-1/2">
      <form action="resetpass" method="POST" class="p-10">
          <div use:focusTrap={true}>
            <h1>Password reset</h1>
            <hr>
        
            {#if form?.formErrors.fieldErrors.rstpsw}
            <label for="rstpsw"><b>Enter new password</b></label>
            <input type="password" class="input-error" placeholder="xxxxxx" name="rstpsw" id="rstpsw" required>
            <span class="text-xs text-red-700">{form?.formErrors.fieldErrors.rstpsw}</span>
            {:else if form?.formErrors.fieldErrors.rstpsw_confirm && !form?.formErrors.fieldErrors.rstpsw}
            <label for="rstpsw"><b>Enter new password</b></label>
            <input type="password" class="input-error" placeholder="xxxxxx" name="rstpsw" id="rstpsw" required>
            {:else}
            <label for="rstpsw"><b>Enter new password</b></label>
            <input type="password" placeholder="xxxxxx" name="rstpsw" id="rstpsw" required>
            {/if}
            <br />
            {#if form?.formErrors.fieldErrors.rstpsw_confirm}
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