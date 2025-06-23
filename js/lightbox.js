
        //控制燈箱
        //登入
        function login(e) {
            e.preventDefault(); //阻止a標籤冒泡行為
            document.getElementById("loginmodal").style.display = "block";
        }

        //取消登入
        function logincancel(e) {
            e.preventDefault();
            document.getElementById("loginmodal").style.display = "none";
        }

        //取消登入
        function logincancelBtn(e){
            e.preventDefault();
            document.getElementById("loginmodal").style.display = "none";
        }

        function checkLoginData(){
            //帳號必須是 0123456789 , 密碼是 Snk1314!
            let  account = "0123456789";
            let password = "Abc1234!";

            //正確//登入成功
            let user_account = document.getElementById("member_id").value;
            let uesr_password = document.getElementById("member_password").value;
            if (user_account === account && uesr_password === password) {

                //儲存登入狀態
                localStorage.setItem("loginStatus", "true");
                //登入bar面版上搜尋btn+會員btn顯示
                document.getElementById("header_user_search").style.display = "flex";
                document.getElementById("header_user_member").style.display = "flex";

                //登入bar面版上登入btn+加入btn隱藏
                document.getElementById("joinbtn").style.display = "none";
                document.getElementById("cancelbtn").style.display = "none";

                //將登入表單上的資料清空，並隱藏起來
                document.getElementById("member_id").value = "";
                document.getElementById("member_password").value = "";
                document.getElementById("loginmodal").style.display = "none";

                location.reload();location.reload();
            }  else {
                //帳密錯誤，顯示帳密錯誤訊息
                alert("帳號或密碼輸入錯誤");
            }
        }

        function checkLoginStatus() {
            const isLoggedIn = localStorage.getItem("loginStatus") === "true";

            if (isLoggedIn) {
                document.getElementById("header_user_search").style.display = "flex";
                document.getElementById("header_user_member").style.display = "flex";
                document.getElementById("joinbtn").style.display = "none";
                document.getElementById("cancelbtn").style.display = "none";
                let header_user_search = document.getElementById("header_user_search");

                if (innerWidth < 1400) {
                    header_user_search.style.display = "none";
                }else{
                    header_user_search.style.display = "flex";
                }

            } else {
                document.getElementById("header_user_search").style.display = "none";
                document.getElementById("header_user_member").style.display = "none";
                document.getElementById("cancelbtn").style.display = "flex";
            }
        }
