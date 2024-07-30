// ================================================ Box-Model ==================================================== //
//  ChatGPT Se liya hua Syntax ---> CSS Box Model ek fundamental concept hai jo web page pe kisi bhi element ka structure aur layout define karta hai. Ye model ek rectangular box ko define karta hai jo har element ke charo taraf hota hai. Is model ke different components hain jo element ke overall dimensions ko banate hain.

// =========================================== Box-Model Material =============================================== //
//  ChatGPT Se liya hua Syntax ---> Box-Model Material.
// 1. Content: Yah element ke andar ka actual content hai, jaise text, images, ya doosri elements. Yah element ki andar ki space ko denote karta hai.

// 2. Padding: Yah space hai jo content ke aaspaas hota hai, uske aur border ke beech mein. Padding element ke background color se fill hoti hai.

// 3. Border: Yah ek line hai jo padding aur margin ke beech hoti hai. Border ka color, width aur style aap CSS ke zariye set kar sakte hain.

// 4. Margin:Yah element aur uske aaspaas ke doosre elements ke beech ki bahari space hai. Margin transparent hoti hai, yaani is par koi background color ya border nahi hota.

// =============================================== Calculation =================================================== //
//  ChatGPT Se liya hua Syntax ---> Total Element Width and Height Calculation.
// Element ki total width aur height calculate karne ke liye, content width/height ke saath padding, border, aur margin ko bhi include kiya jata hai:

// Total Width = Content Width + Padding (left + right) + Border (left + right) + Margin (left + right)
// Total Height = Content Height + Padding (top + bottom) + Border (top + bottom) + Margin (top + bottom)


// =========================================== Box-Sizing Property =============================================== //
//  ChatGPT Se liya hua Syntax ---> CSS me box-sizing property se ye specify kiya ja sakta hai ki width aur height kis tarike se calculate honi chahiye. Is property ke do common values hain.

// 1. content-box (Default): Isme width aur height me sirf content box include hota hai. Padding, border, aur margin ko alag se add karna padta hai.

// 2. border-box: Isme width aur height me content, padding, aur border sab include hote hain, margin ko isme include nahi kiya jata.