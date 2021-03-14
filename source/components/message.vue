<template>
    <h3 class="vue-header-component">{{ message }}</h3>
</template>
<script>
export default {
    name: 'Message',
    data() {
        return {
            message: 'This vue component'
        };
    }
}
</script>