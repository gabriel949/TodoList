<?php 
    header('Access-Control-Allow-Origin: *');      
    
    $tarefas = $_REQUEST["todo"] or $_POST["todo"];    
    $tarefas = json_encode($tarefas);
   // echo $tarefas;
    
    if($tarefas != null){
        //Lógica para salvar no Banco...
        echo "Lista salva com sucesso!!";
    }
    
?>