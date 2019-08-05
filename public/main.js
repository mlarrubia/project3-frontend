

function modalInit(){
    console.log("TEST");
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

};

function selectInit(){
     var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
}