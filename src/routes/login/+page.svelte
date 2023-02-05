<script lang="ts">
  import { focusTrap } from '@skeletonlabs/skeleton';

</script>

<div class="flex flex-row h-full">
  <div class="w-1/2">
    <form action="/login" method="POST" class="p-10">
        <div use:focusTrap={true}>
          <h1>Login</h1>
          <p>Please sign in to your account.</p>
          <hr>
      
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
    
          <button type="submit" class="btn variant-filled-primary btn-base mt-3 mb-1 w-64">Login</button>
        </div>
      
        <div class="container signin">
          <p>Don't have an account? <a href="/register">Register here</a>.</p>
        </div>
    </form> 
  </div>
  <div class="w-1/2 bg-pink-700">
      
  </div>
</div>