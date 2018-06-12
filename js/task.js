// Constructor pattern
(function() {
    angular.module('myModule')

    .factory('Task', function(TaskRepository) {
        var Task = function(data) {
            this.name = data.name;
            this.status = data.status;
        }

        Task.prototype.complete = function() {
            console.log('completing task: ' + this.name);
            this.status = this.status;
            this.save();
        };

        Task.prototype.save = function() {
            TaskRepository.save(this);
        };

        return Task;
    });
}())