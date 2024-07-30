// ================================================= z-index ===================================================== //
//  ChatGPT Se liya hua Syntax ---> z-index CSS property ki madad se aap elements ko stacking context mein control kar sakte hain. Iska use tab hota hai jab aapko elements ko overlap karna hota hai aur decide karna hota hai ki kaunsa element dusre ke upar ya neeche hoga. 


// =========================================== What is this z-index ============================================== //
//  ChatGPT Se liya hua Syntax ---> z-index Kya Hai.
// z-index ek integer value hoti hai jo elements ki stacking order ko define karti hai. Jo element zyada z-index value rakhta hai, woh dusre elements ke upar dikhega.


// ================================================ Key Points =================================================== //
//  ChatGPT Se liya hua Syntax ---> Key Points.
// 1. Stacking Context: z-index tab hi kaam karta hai jab element position property (position: relative, position: absolute, position: fixed, ya position: sticky) ke sath set kiya gaya ho. Agar position property default value static hai, toh z-index ka koi asar nahi hota.

// 2. Positive and Negative Values: Aap z-index ko positive ya negative value de sakte hain:

// 3. Positive Values: Elements ko upar le aata hai.

// Negative Values: Elements ko neeche le aata hai.
// Auto Value: Agar aap z-index: auto set karte hain, toh element apne parent ke stacking context ke hisaab se stack hota hai.

// 4. Stacking Order: Agar multiple elements ka z-index same hai, toh element order uske DOM order ke hisaab se stack hota hai.