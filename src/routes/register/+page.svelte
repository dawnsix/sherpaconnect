<script lang="ts">
  /** @type {import('./$types').ActionData} */
  import { focusTrap } from '@skeletonlabs/skeleton';

  export let form :any;

</script>

<div class="flex flex-row h-full">
  <div class="w-1/2">
    <form action="register" method="POST" class="p-10">
        <div use:focusTrap={true}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr>

          {#if form?.formErrors.fieldErrors.username}
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter username" name="username" id="username" value={form?.data.username ?? ''} class="input-error" required>
          <span class="text-xs text-red-700">{form.formErrors.fieldErrors.username}</span>
          {:else if form?.formErrors.fieldErrors.usernameTaken}
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter username" name="username" id="username" value={form?.data.username ?? ''} class="input-error" required>
          <span class="text-xs text-red-700">{form.formErrors.fieldErrors.usernameTaken}</span>
          {:else}
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter username" name="username" id="username" value={form?.data.username ?? ''} required>
          {/if}
      
          
          {#if form?.formErrors.fieldErrors.email}
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" value={form?.data.email ?? ''} class="input-error" required>
          <span class="text-xs text-red-700">{form.formErrors.fieldErrors.email}</span>
          {:else if form?.formErrors.fieldErrors.emailTaken}
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" value={form?.data.email ?? ''} class="input-error" required>
          <span class="text-xs text-red-700">{form.formErrors.fieldErrors.emailTaken}</span>
          {:else}
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" value={form?.data.email ?? ''} required>
          {/if}
      
          <label for="pws"><b>Password</b></label>
          {#if form?.formErrors.fieldErrors.psw}
          <input type="password" placeholder="Enter Password" name="psw" id="psw" class="input-error" required>
          <span class="text-xs text-red-700">{form.formErrors.fieldErrors.psw}</span>
          {:else if !form?.formErrors.fieldErrors.psw && form?.formErrors.fieldErrors.pswrepeat}
          <input type="password" placeholder="Enter Password" name="psw" id="psw" class="input-error" required>
          <span class="text-xs text-red-700">{form.formErrors.fieldErrors.pswrepeat}</span>
          {:else}
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
          {/if}
      
          <label for="pswrepeat"><b>Confirm Password</b></label>
          {#if form?.formErrors.fieldErrors.pswrepeat}
          <input type="password" placeholder="Repeat Password" name="pswrepeat" id="pswrepeat" class="input-error" required>
          <span class="text-xs text-red-700">{form.formErrors.fieldErrors.pswrepeat}</span>
          {:else}
          <input type="password" placeholder="Repeat Password" name="pswrepeat" id="pswrepeat" required>
          {/if}
          <hr>
      
          <p class="text-sm">By creating an account you agree to our <a href="https://www.lipsum.com/" target="_blank">Terms & Privacy</a>.</p>
          <button type="submit" class="btn variant-filled-primary btn-base mt-3 mb-1 w-64">Register</button>
        </div>
      
        <div class="container signin">
          <p>Already have an account? <a href="/login">Sign in</a>.</p>
        </div>
      </form> 
    </div>
    <div class="w-1/2 bg-pink-700">
        
    </div>
  </div>