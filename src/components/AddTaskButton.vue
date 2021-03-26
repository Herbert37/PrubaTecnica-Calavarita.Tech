<template>
    <div id="buttonDiv" class="row justify-content-md-end fixed-bottom">
        <router-link :to="'/formtask'">
            <a id="btn-formTask" class="btn btn-primary btn-lg">
                <i class="bi bi-plus" style="font-size: 2rem; color: white;"></i>
            </a>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'AddTaskButton',
        created(){
            let data = localStorage.getItem("tasks");
            if(data != null){
                this.tasks = JSON.parse(data);
            }
        }
    }
</script>