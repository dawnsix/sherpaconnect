<script lang="ts">
    import { focusTrap } from '@skeletonlabs/skeleton';
    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';

    export let form: any;
    console.log(JSON.stringify(form))

    $:{
      if(form?.error)
      triggerAlert(form?.error)
    }

    function triggerAlert(message: string): void {
      const alert: ModalSettings = {
        type: 'alert',
        body: message,
        buttonTextCancel: 'Ok'
      };

      modalStore.trigger(alert);
    }
    // email format error
    //form?. => {"formErrors":{"formErrors":[],"fieldErrors":{"email":["Email must be a valid email address"]}}}

    // sb error
    //form?. => {"error":"You recently changed your password. Please try again later."}

  </script>

<Modal />
  
  <div class="flex flex-row h-full">
    <div class="lg:w-1/2">
      <form action="reset" method="POST" class="p-10">
          <div use:focusTrap={true}>
            <h1>Password reset</h1>
            <p>Please enter your email address.</p>
            <hr>

            {#if form?.formErrors?.fieldErrors}
            <label for="email"><b>Email</b></label>
            <input type="email" class="input-error" placeholder="Enter email" name="email" id="email" required>
            <span class="text-xs text-red-700">{form.formErrors.fieldErrors.email}</span>
            {:else}
            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter email" name="email" id="email" required>
            {/if}
          	<hr>
            <button type="submit" class="btn variant-filled-primary btn-base mt-3 mb-1 w-64">Confirm</button>
          </div>
        </form> 
      </div>
      <div class="w-1/2 bg-accent-400 invisible lg:visible">
          
      </div>
    </div>