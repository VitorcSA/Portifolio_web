    let check = false;
    let sidebar = document.getElementById("sidebar");

function checkSidebar(){

    if(!check){
        sidebar.classList.toggle("open");
        check = true;
    }else{
        sidebar.classList.toggle("open");
        check = false;
    }


}