angular.module("todolist", []);

angular.module("todolist").controller("todolistCtrl", function ($scope) {

    let idCont = 0;    

    $scope.tasks = [
    ];

    $scope.adicionarContato = function (task) {
        task.id = idCont++;
        task.status = false;
        $scope.tasks.push(task);
        document.querySelector("label[for='newtodo']").classList.remove("active");
        delete $scope.task;        
    };
    
    
    $scope.grita = (task) => {let index = $scope.tasks.indexOf(task); $scope.tasks.splice(index, 1); }

    $scope.Salvar = function(){

        $.ajax({
                url:'Server.php',
                method: 'POST',
                data: {todo: $scope.tasks}
            }).then(function(data) {
           Materialize.toast(data, 4000)
        });
    }
});

