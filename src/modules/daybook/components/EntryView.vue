<template>
    <div class="entry-container mb-3 pointer p-2 "
        @click="$router.push({name:'entry', params:{id:10}})">
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">31</span>
            <span class="mx-1 fs-5">Octubre</span>
            <span class="mx-2 fw-light">2023, Martes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias commodi inventore at repellat aliquam nostrum earum cumque perspiciatis dolore! Animi deleniti reprehenderit impedit rerum repudiandae placeat magni modi quis voluptates.

        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color:grey,$amount:45);
        transition: 0.2s all ease-in;

    }
}

.entry-description {
    font-size: 12px;

}

</style>