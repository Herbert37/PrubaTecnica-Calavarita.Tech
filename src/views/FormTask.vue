<template>
<div>
    <div class="row justify-content-md-center">
        <div class="col-md-6">  
            <br><h4 class="fw-bold">New Task</h4><br>
        </div>
    </div>
    <div class="row justify-content-md-center">
        <div class="col-md-6">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Task name</label>
                <input type="text" class="form-control" v-model="name" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Description</label>
                <input type="text" class="form-control" v-model="description" aria-describedby="emailHelp"><br>
            </div>
            <button id="addTask" class="btn btn-primary btn-lg" v-on:click="addTask">Save Task</button>
        </div>
    </div>
</div>
</template>

<script>
    const getCurrentDateTime = () => {
        const date = new Date();
        let hour = date.getHours();
        let minuts = date.getMinutes();
        return `${date.toDateString()}, ${hour}:${minuts}`;
    }
    export default {
        name: 'FormTask',
        data(){
            return{
                tasks:[],
                name: "",
                description: "",
                currentDatetime: getCurrentDateTime(),
                isFinished: false
            }
        },
        created(){
            this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        },
        methods: {
            addTask(){
                this.tasks.push(
                    {
                        id: Date.now(),
                        name: this.name,
                        description: this.description,
                        currentDatetime: getCurrentDateTime(),
                        isFinished: false
                    }
                )
                localStorage.setItem("tasks", JSON.stringify(this.tasks))
                this.newItem = "";
                window.location.href = '/';
            }
        }
    }
</script>