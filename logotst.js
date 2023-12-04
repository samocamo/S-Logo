// lebels for the variables
        let anchorone = document.getElementById("anchor-one")
        let anchortwo = document.getElementById("anchor-two")
        let anchorthree = document.getElementById("anchor-three")
    /* creating a function in which when X is hovered over all
    the background styling will change to a light blue to 
    indicate its clickable*/
        function hover() {
            anchorone.style.backgroundColor = 'hsl(166, 100%, 10%)'
            anchortwo.style.backgroundColor = 'hsl(166, 100%, 10%)'
            anchorthree.style.backgroundColor = 'hsl(166, 100%, 10%)'
        }
       /* then changing the bacgkround colro back to its orignal color
       when cursor moves out*/
        function hoverOut(){
            anchorone.style.backgroundColor = '#262626'
            anchortwo.style.backgroundColor = '#262626'
            anchorthree.style.backgroundColor = '#262626'
        }

        //adding event listensers to each variable so it will work for all of them
        anchorone.addEventListener("mouseover",hover);
        anchortwo.addEventListener("mouseover",hover);
        anchorthree.addEventListener("mouseover",hover);

        anchorone.addEventListener("mouseout",hoverOut);
        anchortwo.addEventListener("mouseout",hoverOut);
        anchorthree.addEventListener("mouseout",hoverOut);