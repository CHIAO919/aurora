        //footer
        document.addEventListener("DOMContentLoaded", function () {
            const titles = document.querySelectorAll(".footer_inner_title");
            const lists = document.querySelectorAll(".footer_inner_txt_list");

            function updateFooterDisplay() {
                if (window.innerWidth >= 1024) {
                    // 桌機版：全部展開
                    lists.forEach(function(list) {
                        list.style.display = "flex";
                        list.style.flexDirection = "column";
                    });
                } else {
                    // 行動版：全部收起
                    lists.forEach(function(list) {
                        list.style.display = "none";
                    });
                }
            }

            // 初次載入時判斷
            updateFooterDisplay();

            // 點擊事件只在小於 1024 時作用
            titles.forEach(function(title) {
                title.addEventListener("click", function() {
                    if (window.innerWidth >= 1024) return;

                    const list = this.nextElementSibling;

                    if (list && list.classList.contains("footer_inner_txt_list")) {
                        if (list.style.display === "flex") {
                            list.style.display = "none";
                        } else {
                            // 收起其他
                            lists.forEach(function(otherList) {
                                otherList.style.display = "none";
                            });
                            list.style.display = "flex";
                            list.style.flexDirection = "column";
                        }
                    }
                });
            });

            // 視窗大小改變時重新套用一次
            window.addEventListener("resize", updateFooterDisplay);
        });