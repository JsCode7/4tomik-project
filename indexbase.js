document.addEventListener('DOMContentLoaded', function(){
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');
    let id = 1;

        function removeTodo (id){
            console.log(id);
            document.getElementById(id).remove();
        }

       function addTodo(){
        if(title.value === '' || description.value === ''){
            alert.classList.remove('d-none');
            alert.innerText = 'Title and description are required';
            return;
        } 
        alert.classList.add('d-none');
    }

    btn.onclick = addTodo;
});
