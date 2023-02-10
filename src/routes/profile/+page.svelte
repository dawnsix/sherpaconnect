<script lang="ts">
    export let data: any;
</script>

<h3>User Profile</h3>
<br />

<p>Username: <span class="text-pink-700">{data.profileData[0].username}</span></p>
<p>Full Name: <span class="text-pink-700">{data.profileData[0].full_name}</span></p>
<p>Email: <span class="text-pink-700">{data.profileData[0].email}</span></p>