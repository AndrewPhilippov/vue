<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>Server #{{ server.id }} selected. Server status: {{ server.status }}</p>
        <hr>
        <button @click="resetStatus">Change to normal</button>
    </div>

</template>

<script>
    import { serverBus } from "../../main";

    export default {
        data: function(){
            return {
                server: null
            }
        },
        created(){
            serverBus.$on('serverSelected', (server) => {
                this.server = server
            })
        },
        methods: {
            resetStatus(){
                this.server.status = 'Normal'
            }
        }
    }
</script>

<style>

</style>
