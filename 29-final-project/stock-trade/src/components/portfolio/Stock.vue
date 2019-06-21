<template>
    <div class="col-sm-6 col-md-4">
        <div class="card border-success mt-4">
            <div class="card-header text-success">
                <h3>{{ stock.name }} <small class="lead">Price: {{ stock.price }}$ | Quantity: {{ stock.quantity }}</small></h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="float-left ml-2">
                        <input
                                type="number"
                                class="form-group form-control mr-2"
                                placeholder="Quantity"
                                v-model="quantity"
                        >
                    </div>
                    <div class="sm-float-right ml-auto mr-2">
                        <button class="btn btn-success"
                                @click="sellStock"
                                :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
                        >Sell
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "Stock",
        props: ['stock'],
        data(){
            return {
                quantity: 0
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: +this.quantity,
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
    small{
        font-size: .8rem;
    }
    input{
        margin-right: 2rem;
    }
</style>