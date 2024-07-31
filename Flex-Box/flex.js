// ================================================= Flex-Box ==================================================== //
//  ChatGPT Se liya hua Syntax ---> CSS Flexbox ek layout model hai jo container ke andar elements ko space aur alignment ke liye bahut flexibility provide karta hai. Yeh layout model responsive design ko asaan banaata hai aur elements ko dynamically arrange karne me help karta hai. Flexbox ka basic concept flex container aur flex items pe based hota hai

// ============================================== Container-Item ================================================= //
//  ChatGPT Se liya hua Syntax ---> Flex Container
// Flex Container wo element hota hai jiske andar flex items hote hain. Flex container ko display: flex; ya display: inline-flex; property use karke banaya jaata hai.
// display: flex; – Yeh block-level container create karta hai.
// display: inline-flex; – Yeh inline-level container create karta hai

// 2. Flex Items
// Flex items wo elements hote hain jo flex container ke andar placed hote hain. In elements ko control karne ke liye container pe CSS properties apply ki jaati hain.



// ========================================= Flex Container Properties =========================================== //
//  ChatGPT Se liya hua Syntax ---> . Flex Container Properties.
// 1. Flex Direction: flex-direction property decide karti hai ki flex items ko kaise arrange kiya jayega.
// row (default) – Left to right.
// row-reverse – Right to left.
// column – Top to bottom.
// column-reverse – Bottom to top.


// 2. Flex Wrap: flex-wrap property decide karti hai ki flex items wrap karenge ya nahi.
// nowrap (default) – Items ek hi line me rahenge.
// wrap – Items wrap karenge.
// wrap-reverse – Items reverse order me wrap karenge.



// 3. Flex Flow:  flex-flow property flex-direction aur flex-wrap ko ek saath set karne ke liye use hoti hai.
// .container {
//     display: flex;
//     flex-flow: row wrap; /* Syntax: flex-flow: <flex-direction> <flex-wrap> */
//   }
  


// 4. Justify Content: justify-content property items ko container ke main axis (flex-direction ke according) ke along align karti hai.

// flex-start (default) – Start of the container.
// flex-end – End of the container.
// center – Center of the container.
// space-between – Equal space between items.
// space-around – Equal space around items.
// space-evenly – Equal space between and around items.


// 4. Align Items: align-items property items ko cross axis (perpendicular to the flex-direction) ke along align karti hai.

// stretch (default) – Items stretch to fill the container.
// flex-start – Start of the cross axis.
// flex-end – End of the cross axis.
// center – Center of the cross axis.
// baseline – Align based on the baseline of items.



// 5. Align Content: align-content property multiple lines of flex items ko align karti hai (useful when items wrap).

// stretch (default) – Stretch to fill the container.
// flex-start – Start of the cross axis.
// flex-end – End of the cross axis.
// center – Center of the cross axis.
// space-between – Equal space between lines.
// space-around – Equal space around lines.



// =========================================== Flex Item Properties ============================================= //
//  ChatGPT Se liya hua Syntax ---> 
//  1. a. Flex Grow: flex-grow property decide karti hai ki ek flex item container ke free space ko kitna grow karega. Default value 0 hai.


// 2. Flex Shrink; flex-shrink property decide karti hai ki ek flex item container ke free space ke reduce hone par kitna shrink karega. Default value 1 hai.


// 3.  Flex Basis: flex-basis property item ki initial size ko set karti hai before free space distribution. Default value auto hai.


// 4. Flex: flex property flex-grow, flex-shrink, aur flex-basis ko shorthand me define karti hai.

// 5. Align Self: align-self property individual flex item ko cross axis ke along align karti hai. Ye align-items property ko override karti hai.
