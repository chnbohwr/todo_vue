

<template>

<div class="todo">
    <h3>Todo</h3>
    <form class="form-inline">
        <div class="form-group">
            <label>Todo</label>
            <input type="text" v-model="todo_text" />
        </div>
        <button class="btn btn-primary" type="button" v-on:click="clickButton">Add</button>
        <button class="btn btn-info" v-on:click="filter">filter</button>
    </form>
    <div class="todo-items">
        <li v-for="todo in todos">
            {{todo.msg}}
        </li>
    </div>
</div>

</template>

<script>

var todos = [{
    id: 0,
    msg: 'go to market'
}, {
    id: 1,
    msg: 'go to store'
}];

var todo_text = '';

function filter(){
    this.todos = this.todos.filter(function(todo){
        if(todo.id === 0){
            return true;
        }
    })
}

function clickButton() {
    var data = {
        id: Math.random(),
        msg: this.todo_text
    };
    this.todos.push(data);
    this.todo_text = '';
}

export default {
    data: ()=>({
        todos,
        todo_text
    }),
    methods: {
        clickButton,
        filter
    }
};

</script>
