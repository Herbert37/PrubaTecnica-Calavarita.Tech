<template>
    <div class="row justify-content-md-center">
        <div class="col-md-6">   
            <div class="card">
                <div class="card-body">
                    <div class="btn-toolbar justify-content-between" role="toolbar">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="isComplete">
                            <p>{{ name }}</p>
                        </div>
                        <div class="btn-group" role="group" aria-label="First group">
                            <button class="btn btn-secondary" type="button">
                                <i class="bi bi-pen-fill"></i>
                            </button>
                            <button v-on:click="deleteTask(items)" class="btn btn-secondary" type="button">
                                <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                    </div>
                    <p><em>{{ time }}</em></p>              
                </div>
            </div><br>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tasks',
        data(){
            return{
                tasks: []
            }
        },
        props: {
            name: String,
            description: String,
            time: String,
            isComplete: Boolean,
            items: Object,
            id: Number
        },
        created(){
            this.fetchTask();
        },
        computed: {
            test(items){
                return items.isComplete;
            }
        },
        methods: {
            fetchTask(){
                this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            },
            deleteTask(items){
                const data = this.tasks.filter((item) => item.id != items.id);
                console.log(data);
                localStorage.setItem('tasks', JSON.stringify(data));
                this.fetchTask();
                this.$emit('on-delete');
            }
        }
    }
</script>