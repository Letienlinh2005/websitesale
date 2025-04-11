document.addEventListener("DOMContentLoaded", function() {
    const buyTab = document.getElementById("swap-buy");
    const sellTab = document.getElementById("swap-sell");
    const leftContent = document.getElementById("main-left");
    const rightContent = document.getElementById("main-right");
    
    // Thiết lập ban đầu dựa trên kích thước màn hình
    function setInitialLayout() {
        if (window.innerWidth <= 767) {
            // Màn hình nhỏ: hiển thị mục mua xe mặc định
            if (buyTab.classList.contains("active")) {
                leftContent.style.display = "block";
                rightContent.style.display = "none";
            } else if (sellTab.classList.contains("active")) {
                rightContent.style.display = "block";
                leftContent.style.display = "none";
            } else {
                // Mặc định nếu không có tab nào active
                buyTab.classList.add("active");
                leftContent.style.display = "block";
                rightContent.style.display = "none";
            }
        } else {
            // Màn hình lớn: hiển thị cả hai
            leftContent.style.display = "block";
            rightContent.style.display = "block";
        }
    }
    
    // Thiết lập click event cho tab
    buyTab.addEventListener("click", function() {
        buyTab.classList.add("active");
        sellTab.classList.remove("active");
        
        if (window.innerWidth <= 767) {
            leftContent.style.display = "block";
            rightContent.style.display = "none";
        }
    });
    
    sellTab.addEventListener("click", function() {
        sellTab.classList.add("active");
        buyTab.classList.remove("active");
        
        if (window.innerWidth <= 767) {
            rightContent.style.display = "block";
            leftContent.style.display = "none";
        }
    });
    
    // Thiết lập lại layout khi thay đổi kích thước màn hình
    window.addEventListener("resize", setInitialLayout);
    
    // Thiết lập layout ban đầu
    setInitialLayout();
});