<script lang="ts">
  import type { PageData } from "./$types";


    export let data: any;
    export let form: any;
</script>

<hr class="mt-10 ml-3"/>
<div class="flex">
    <h3 class="mt-3 ml-3">Profile</h3>
    <h4 class="mt-3 mx-2 float-left">&#9998;</h4>
</div>

<form class="px-10">
    <label for="username">Username</label>
    <input id="username" type="text" value={data.profileData[0].username} readonly/>

    <label for="fullname">Full Name</label>
    <input id="fullname" type="text" value={data.profileData[0].full_name} readonly/>

    <label for="email">Email</label>
    <input id="email" type="text" value={data.profileData[0].email} readonly/>

</form>