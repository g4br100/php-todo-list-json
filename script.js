const { createApp } = Vue;

createApp({
    data() {
        return {
            taskList: [
                {
                    message: 'A',
                    flag: false,
                },
                {
                    message: 'B',
                    flag: false,
                },
                {
                    message: 'C',
                    flag: false,
                },
            ],

            errorMessage: "",
            newMessageTask: "",

        }
    },
    methods: {
        log() {
            console.log("mi hai cliccato")
        },
        deleteTask(task, index) {
            if (task.flag) {
                this.taskList.splice(index, 1);
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
            const obj = {
                message: this.newMessageTask,
                flag: false
            }
            if (this.newMessageTask.length >= 5) {
                this.taskList.unshift(obj)
                this.newMessageTask = ""
            } else {
                this.errorMessage = "La task deve avere almeno 5 caratteri"
                setTimeout(() => {
                    this.errorMessage = ""
                }, 2000);
            }

        }
    }

}).mount('#app')