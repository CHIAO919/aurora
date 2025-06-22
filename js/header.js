        //header 漢堡開關
        function hamburgeropen(e){
            document.getElementById("menu_list_group").style.display = "block";
            document.getElementById("menu_close").style.display = "block";
            document.getElementById("menu_open").style.display = "none";
        }

        function hamburgerclose(e){
            document.getElementById("menu_list_group").style.display = "none";
            document.getElementById("menu_close").style.display = "none";
            document.getElementById("menu_open").style.display = "block";
        }

        function flight_search(){

            let header_user_search = document.getElementById("header_user_search");

            if (innerWidth < 1400) {
                header_user_search.style.display = "none";
            }else{
                header_user_search.style.display = "flex";
            }
        }

        window.addEventListener("resize", flight_search);
        window.addEventListener("load", flight_search);