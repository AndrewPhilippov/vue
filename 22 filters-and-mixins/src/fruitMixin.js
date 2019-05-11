export const fruitMixin = {
    data(){
        return {
            text: 'Hello World!',
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.filterText)
            });
        }
    },
    created() {
        console.log('Created in mixin');
    }
};