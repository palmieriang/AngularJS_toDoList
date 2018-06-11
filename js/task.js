(function() {
    angular.module('myModule')

    .factory('Task', function() {
        var Task = function(data) {
            this.name = data.name;
            this.completed = data.completed;
        }

        Task.prototype.complete = function() {
            console.log('completing task: ' + this.name);
            this.completed = true;
            // this.save();
        };

        Task.prototype.save = function() {
            console.log('saving task: ' + this.name);
        };

        Task.prototype.modify = function(name) {
            this.name = name;
        };

        return Task;
    });
}())