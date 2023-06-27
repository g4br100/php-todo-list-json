const { createApp } = Vue;

createApp({
    data() {
        return {
            taskList: [],

            errorMessage: "",

            newMessageTask: "",

        }
    },
    methods: {

        readApi() {
            axios.get('server.php')
                .then(result => {
                    this.taskList = result.data
                    console.log('Risultato chiamata Api --->', result.data)
                    console.log('Risultato', this.taskList)
                })
        },

        deleteTask(task, index) {
            if (task.flag) {
                const data = new FormData();
                data.append('indexToDelete', index)

                axios.post('server.php', data)
                    .then(result => {
                        this.taskList = result.data
                    })

                this.errorMessage = "Task rimossa"
                setTimeout(() => {
                    this.errorMessage = ""
                }, 2000);
            } else {
                this.errorMessage = "Prima contrassegnare la task"
                setTimeout(() => {
                    this.errorMessage = ""
                }, 2000);
            }
        },

        createNewObj() {
            if (this.newMessageTask.length >= 5) {
                newTask = this.newMessageTask;
                const data = new FormData()
                data.append('newOne', newTask)
                axios.post('server.php', data)
                    .then(result => {
                        this.newMessageTask = '';
                        this.taskList = result.data;
                    })
                this.newMessageTask = ""
            } else {
                this.errorMessage = "La task deve avere almeno 5 caratteri"
                setTimeout(() => {
                    this.errorMessage = ""
                }, 2000);
            }
        },
    },
    mounted() {
        this.readApi()

    }

}).mount('#app')