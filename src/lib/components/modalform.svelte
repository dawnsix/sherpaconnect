<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Stores
	import { modalStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
  	import type { Data } from '@skeletonlabs/skeleton/utilities/DataTable/types';

	// Form Data
	/** @type {import('./$types').PageData} */
	let formData = {username:"",title:"",desc:""}
	console.log($page.data.targetPost)

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'space-y-4';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

<div class="modal-example-form {cBase}">
	<!-- Enable for debugging: -->
	<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
	<form class="modal-form {cForm}">
		<label class="label">
			<span>Name</span>
			<input class="input" type="text" bind:value={formData.username} placeholder="Enter name..." />
		</label>
		<label class="label">
			<span>Phone Number</span>
			<input class="input" type="tel" bind:value={formData.title} placeholder="Enter phone..." />
		</label>
		<label class="label">
			<span>Email</span>
			<input class="input" type="email" bind:value={formData.desc} placeholder="Enter email address..." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
    </footer>
</div>
