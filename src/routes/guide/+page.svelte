<script lang="ts">
    import { Stepper, Step } from '@skeletonlabs/skeleton';

    function onCompleteHandler(e: Event): void { console.log('event:complete', e); }
</script>

<p>here is a walkthrough of our services...</p>

<Stepper on:complete={onCompleteHandler}>
	<Step>(content)</Step>
	<Step>(content)</Step>
    <Step>(content)</Step>
	<!-- ... -->
</Stepper>