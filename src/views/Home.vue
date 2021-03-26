<template>
    <div>
        <div class="row justify-content-md-center">
            <div class="col-md-6">  
                <br><h4 class="fw-bold">{{title}} {{date.toDateString()}}</h4><br>
            </div>
        </div>
        <div v-for="(task, idx) in tasks" :key="idx">
            <Tasks :name="task.name" :description="task.description" :items="task" v-on:on-delete="fetchTask"/>
        </div>
        <AddTaskButton/>
    </div>
</template>

<script>
import Tasks from '../components/Tasks.vue';
import AddTaskButton from '../components/AddTaskButton.vue';
export default {
    components: { Tasks, AddTaskButton },
    name: 'Home',
    data(){
        return {
        date: new Date,
        title: "All for today - ",
        tasks: []
        }
    },
    methods: {
        fetchTask(){
            console.log("mensaje");
            this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        }
    },
    created(){
        this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    }
}
</script>

<style>
body{
  background-color: #F4F4FC;
}
nav{
  box-shadow: 0 4px 2px -2px rgb(216, 216, 216);
}
.card, .form-control, #addTask{
  border-radius: 15px;
  box-shadow: 2px 2px 2px rgb(216, 216, 216);
}
#btn-formTask{
  border-radius: 350px;
  box-shadow: 4px 4px 4px rgb(216, 216, 216);
}
#buttonDiv{
  padding: 50px;
}
.form-control{
    height: 50px;
}
</style>