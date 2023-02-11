<script lang="ts">
  import { focusTrap } from '@skeletonlabs/skeleton';

  export let form: any;
  console.log(form)

</script>

<div class="flex flex-row h-full">
  <div class="lg:w-1/2">
    <form action="/login" method="POST" class="p-10">
        <div use:focusTrap={true}>
          <h1>Login</h1>
          <p>Please sign in to your account.</p>
          <hr>
      
          {#if form?.formErrors.fieldErrors}
          <label for="email"><b>Email</b></label>
          <input type="email" class="input-error" placeholder="Enter Email" name="email" id="email" required>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" class="input-error" placeholder="Enter Password" name="psw" id="psw" required>
          <span class="text-xs text-red-700">Authentication failed</span>
          {:else}
          <label for="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" id="email" required>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
          {/if}
          <br />
          <button type="submit" class="btn variant-filled-primary btn-base mt-3 mb-1 w-64">Login</button>
        </div>
      
        <div class="container signin">
          <p>Don't have an account? <a href="/register">Register here</a>.</p>
          <p><a href="/reset">Forgot your password?</a></p>
        </div>
    </form> 
  </div>
  <div class="w-1/2 bg-pink-700 invisible lg:visible">
      
  </div>
</div>