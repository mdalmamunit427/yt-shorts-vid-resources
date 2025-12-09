document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the target element to check for hover
    const title = document.querySelector(".title"); 

    // 2. Create and set up the custom cursor DIV
    const cursor = document.createElement("div"); 
    
    // Define the cursor sizes
    const cursorWidth = 25; 
    const cursorHeight = 25; 
    const cursorWidthHover = 150; 
    const cursorHeightHover = 150; 
    
    // Set the initial style and add to the body
    cursor.classList.add("cursor"); 
    cursor.style.width = cursorWidth + "px";
    cursor.style.height = cursorHeight + "px";
    document.body.appendChild(cursor); 

    // 3. Track mouse movement and update cursor position/size
    document.body.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;
        
        // Get the position of the target element
        const rect = title.getBoundingClientRect(); 
        
        // Check if the mouse is inside the target element's boundaries
        const inTitle = (x > rect.left) && (x < rect.right) && (y > rect.top) && (y < rect.bottom);
        
        if (inTitle) {
            // Hover State: Large size
            
            // Center the large cursor (100px) on the mouse coordinates
            cursor.style.top = (y - cursorHeightHover / 2) + "px";
            cursor.style.left = (x - cursorWidthHover / 2) + "px";
            
            // Apply the large dimensions
            cursor.style.width = cursorWidthHover + "px";
            cursor.style.height = cursorHeightHover + "px";
            
        } else {
            // Default State: Small size
            
            // Center the small cursor (25px) on the mouse coordinates
            cursor.style.top = (y - cursorHeight / 2) + "px";
            cursor.style.left = (x - cursorWidth / 2) + "px";
            
            // Apply the default dimensions
            cursor.style.width = cursorWidth + "px";
            cursor.style.height = cursorHeight + "px";
        }
    });
});