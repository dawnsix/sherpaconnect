<script lang="ts">
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { tableMapperValues } from '@skeletonlabs/skeleton';
    import { Table } from '@skeletonlabs/skeleton';

    export let data: any;

    const postTable: TableSource = {
	// A list of heading labels.
        head: ['Creator username', 'Service', 'Description', 'Price'],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(data.postData, ['username', 'title', 'desc', 'price']),
        // Optional: The data returned when interactive is enabled and a row is clicked.
        meta: tableMapperValues(data.postData, ['username', 'title', 'desc', 'price']),
    };

    const mySelectionHandler = (row: any) => {
        alert(row)
    }

</script>

<p class="italic">TEMP: dump post data from db into skeleton table</p>
<br />

<Table source={postTable} interactive={true} on:selected={mySelectionHandler} />