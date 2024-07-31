// ================================================= CSS Grid ==================================================== //
//  ChatGPT Se liya hua Syntax ---> CSS Grid ek powerful layout system hai jo web pages ko complex and responsive layouts create karne mein madad karta hai. Iska use karke aap ek two-dimensional grid system define kar sakte hain, jo rows aur columns ka combination hota hai


// ============================================= Grid Key Concepts =============================================== //
//  ChatGPT Se liya hua Syntax ---> CSS Grid Key Concepts. 
// 1. Grid Container: Yeh element hai jismein aap grid layout apply karte hain. Iske liye display: grid; ya display: inline-grid; property use hoti hai.

// 2. Grid Items: Yeh elements hain jo grid container ke andar placed hote hain aur grid layout ke rules follow karte hain.

// 3. Grid Lines: Yeh horizontal aur vertical lines hain jo grid container ko rows aur columns mein divide karti hain.

// 4. Grid Cells: Yeh single unit hai jo ek row aur ek column ke intersection pe hota hai.

// 5. Grid Tracks: Yeh rows aur columns hain jo grid container mein defined hote hain.

// 6. Grid Areas: Yeh ek ya zyada grid cells ka combination hai jo ek named area ko define karta hai.


// ========================================= Grid Container Porpertry ============================================ //
//  ChatGPT Se liya hua Syntax ---> 

// 1. display
// Description: Yeh property define karti hai ki element ek grid container banega. grid container ko block-level grid container banata hai, jabki inline-grid container ko inline grid container banata hai.

// 2. grid-template-columns
// Description: Yeh property columns ki size aur number ko define karti hai. fr (fractional unit), px (pixels), %, em, etc. ka use kiya ja sakta hai.


// 3. grid-template-rows
// Description: Yeh property rows ki size aur number ko define karti hai. Size units jaise px, fr, %, auto ka use kiya ja sakta hai.


// 4. grid-template-areas
// Description: Yeh property named grid areas ko define karti hai. Aap grid items ko named areas assign karke unki placement ko control kar sakte hain.


// 5. grid-column-gap / grid-row-gap / gap.
// Description: Yeh properties grid items ke beech ka space define karti hain. gap dono column aur row gaps ko ek hi time pe set kar sakti hai.


// 6. justify-items
// Description: Yeh property grid items ko horizontal alignment provide karti hai grid cell ke andar.


// 7. align-items
// Description: Yeh property grid items ko vertical alignment provide karti hai grid cell ke andar.


// 8. justify-content
// Description: Yeh property grid tracks ko horizontal alignment provide karti hai grid container ke andar.


// 9. align-content
// Description: Yeh property grid tracks ko vertical alignment provide karti hai grid container ke andar.


// ========================================= advanced features  ============================================ //
//  ChatGPT Se liya hua Syntax ---> Grid Container Porpertry advanced features .

// 1. Auto-fill and Auto-fit: auto-fill aur auto-fit functions aapko dynamically adjust karne ki suvidha dete hain grid items ko, bina explicitly columns ya rows define kiye.

// auto-fill: Yeh available space ke according columns ko fill karta hai. Agar space available nahi hai toh yeh columns ko adjust karta hai aur empty cells ko add karta hai.

// auto-fit: Yeh bhi auto-fill jaisa hi hota hai, lekin yeh empty cells ko ignore karta hai aur grid items ko fit kar deta hai.

// .container {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
//     gap: 10px;
//   }
  



// 2. Minmax and Fractional Units:  minmax() function aapko ek range define karne ki suvidha deta hai for grid items. fr (fractional units) ko use karke aap available space ko divide kar sakte hain.
// .container {
//     display: grid;
//     grid-template-columns: repeat(3, minmax(100px, 1fr));
//     grid-template-rows: repeat(2, 1fr);
//     gap: 10px;
//   }
  


// 3. Grid Auto Flow: grid-auto-flow property define karti hai ki grid items ko kis tarike se place kiya jayega jab space available nahi hota.

// row: Items ko rows ke according place karta hai.
// column: Items ko columns ke according place karta hai.
// dense: Yeh property gaps ko fill karne ki koshish karti hai aur items ko denser placement provide karti hai.
// .container {
//     display: grid;
//     grid-auto-flow: dense;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 10px;
//   }
  

// 4. Implicit and Explicit Grids

// Explicit Grid: Yeh wo grid hai jo grid-template-columns aur grid-template-rows properties se define kiya gaya hai.

// Implicit Grid: Yeh wo grid hai jo automatically generate hoti hai jab aap grid items ko place karte hain aur explicit grid ke boundary se bahar chala jata hai.

// .container {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-auto-rows: 100px; /* Implicit rows */
//   }
  