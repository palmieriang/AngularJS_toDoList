// Constructor pattern
(function() {
    angular.module('myModule')

    .factory('Task', function(TaskRepository) {
        var Task = function(data) {
            this.name = data.name;
            this.status = data.status;
            this.editable = false;
        }

        Task.prototype.complete = function() {
            console.log('completing task: ' + this.name);
            this.status = this.status;
            this.save();
        };

        Task.prototype.save = function() {
            TaskRepository.save(this);
        };

        Task.prototype.makeEditable = function() {
            this.editable = !this.editable;
            console.log(this.editable);
        };

        Task.prototype.enterAgain = function(event) {
            if(event.which == 13 && event.target.innerText != '') {
                this.name = event.target.innerText;
                this.makeEditable();
            };
        };

        return Task;
    });
}())