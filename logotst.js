
        let anchorone = document.getElementById("anchor-one")
        let anchortwo = document.getElementById("anchor-two")
        let anchorthree = document.getElementById("anchor-three")
       
        function hover() {
            anchorone.style.backgroundColor = 'hsl(166, 100%, 10%)'
            anchortwo.style.backgroundColor = 'hsl(166, 100%, 10%)'
            anchorthree.style.backgroundColor = 'hsl(166, 100%, 10%)'
        }
       
        function hoverOut(){
            anchorone.style.backgroundColor = '#262626'
            anchortwo.style.backgroundColor = '#262626'
            anchorthree.style.backgroundColor = '#262626'
        }


        anchorone.addEventListener("mouseover",hover);
        anchortwo.addEventListener("mouseover",hover);
        anchorthree.addEventListener("mouseover",hover);

        anchorone.addEventListener("mouseout",hoverOut);
        anchortwo.addEventListener("mouseout",hoverOut);
        anchorthree.addEventListener("mouseout",hoverOut);