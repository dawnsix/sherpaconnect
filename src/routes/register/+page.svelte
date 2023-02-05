<script lang="ts">
  import { focusTrap } from '@skeletonlabs/skeleton';

</script>

<div class="flex flex-row h-full">
  <div class="w-1/2">
    <form action="register" method="POST" class="p-10">
        <div use:focusTrap={true}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr>

          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter username" name="username" id="username" required>
      
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required>
      
          <label for="pws"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
      
          <label for="psw-repeat"><b>Confirm Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
          <hr>
      
          <p class="text-sm">By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>
          <button type="submit" class="btn variant-filled-primary btn-base mt-1 mb-1 w-64">Register</button>
        </div>
      
        <div class="container signin">
          <p>Already have an account? <a href="/login">Sign in</a>.</p>
        </div>
      </form> 
    </div>
    <div class="w-1/2 bg-pink-700">
        
    </div>
  </div>