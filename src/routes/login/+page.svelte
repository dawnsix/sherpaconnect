<script lang="ts">
</script>

<form action="/login" method="POST">
    <div>
      <h1>Login</h1>
      <p>Please sign in to your account.</p>
      <hr>
  
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

      <button type="submit" class="registerbtn">Login</button>
    </div>
  
    <div class="container signin">
      <p>Don't have an account? <a href="/register">Register here</a>.</p>
    </div>
  </form> 