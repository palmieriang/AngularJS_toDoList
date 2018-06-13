// Module pattern
(function() {
    angular.module('myModule')
    .service('TaskRepository', function($http) {
        var db = {};

        var get = function(id) {
            console.log('Getting task ' + id);
            return {
                name: 'new task from db'
            }
        }

        var save = function(task) {
            console.log('Saving ' + task.name + ' to the db');
        }

        return {
            get: get,
            save: save
        }
    });
}())


// Singleton pattern (when only one instance or a specific number of instances of a class are allowed)
// (function() {
//     angular.module('myModule')
//     .service('TaskRepository', function($http) {
//         var called = 0;
//         var db = {};

//         var get = function(id) {
//             called++;
//             console.log('Getting task ' + id + ' called ' + called + ' times.');
//             return {
//                 name: 'task ' + id
//             }
//         }

//         var save = function(task) {
//             called++;
//             console.log('Saving ' + task.name + ' to the db'+ ' called ' + called + ' times.');
//         }

//         return {
//             get: get,
//             save: save
//         }
//     });
// }())


// Different sintax

// (function() {
//     var app = angular.module('taskManager');

//     var taskRepo = function($http) {
//     var called = 0;
//     var db = {};
  
//     var get = function(id) {
//             called++;
//             console.log('Getting task ' + id + ' called ' + called + ' times.');
//             return {
//                 name: 'task ' + id
//             }
//         }

//         var save = function(task) {
//             called++;
//             console.log('Saving ' + task.name + ' to the db'+ ' called ' + called + ' times.');
//         }

//         return {
//             get: get,
//             save: save
//         }

//     }
//     app.service('TaskRepository', taskRepo);
// }())
