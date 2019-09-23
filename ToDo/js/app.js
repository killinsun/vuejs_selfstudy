let taskArray = [
    {
        id: 1,
        index: 0,
        name: '起きる',
        isDone: false,
        isFocus: false
    },
    {
        id: 2,
        index: 1,
        name: '寝る',
        isDone: false,
        isFocus: false
    }
]

Vue.component('header-object', {
    template: '#header-template'
});

Vue.component('task', {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    template: '#task-template',
    methods: {
        toggleDone: function () {
            if (this.isDone) {
                this.isDone = false;
            } else {
                this.isDone = true;
            }
            console.log(this.task.name + ' is toggled to ' + this.isDone)
            moveToLast(this.index);
            return;
        },
        clickLabel: function () {
            this.task.isFocus = true
        },
        exec: function () {
            this.task.isFocus = false;
        }
    },
    computed: {
        finishedTaskStyle: function () {
            return {
                color: this ? '' : 'red'
            }
        }
    }
});

Vue.component('task-add', {
    template: '#task-add-template',
    methods: {
        addTask: function () {
            taskArray.push({
                id: taskArray.length + 1,
                index: taskArray.length + 1,
                name: '',
                isDone: false,
                isFocus: true
            });
            return
        }
    }
})

new Vue({
    el: '#header'
});

const app = new Vue({
    el: '#todo-app',
    data: {
        tasks: taskArray
    }
});


function moveToLast(index) {
    taskArray.sort()
}