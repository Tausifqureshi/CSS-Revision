// =========================================== Combinator-Selector ============================================== //
//  ChatGPT Se liya hua Syntax --->
// CSS combinator selectors aapko elements ko unke relationship ke base par select karne ki suvidha dete hain. Yeh selectors alag-alag types ke combinators ko use karke elements ko target karte hain, jaise ki direct children, adjacent siblings, aur general siblings


// =========================================== Descendant Selector ============================================== //
//  ChatGPT Se liya hua Syntax ---> 1. Descendant Selector (Space)
// Description: Yeh combinator target karta hai ek element ko jo kisi specified ancestor element ke andar hai.
// "Sabhi aulad, jitne bhi generations ke ho, sab pe lagao.
{/* <div>
  <p>Ye select hoga ✅</p>
  <section>
    <p>Ye bhi select hoga ✅</p>
  </section>
</div> */}

// div ke andar jitne bhi p tags hain, sab select honge. Chahe woh direct child ho ya kisi aur element ke andar ho.


// ============================================== Child Selector  ================================================ //
//  ChatGPT Se liya hua Syntax ---> 2. Child Combinator (>)
// Syntax: parent > child
// "Sirf mere direct bachche pe lagao, na ki pote-poti pe!"
{/* <div>
  <p>Ye select hoga ✅</p>
  <section>
    <p>Ye select nahi hoga ❌</p>
  </section>
</div> */}

// div ke andar jo p tag hai, wahi select hoga. Lekin agar koi section ke andar p tag hai, toh woh select nahi hoga.



// Description: Yeh combinator target karta hai direct child elements ko ek specified parent ke under.

// ======================================== Adjacent Sibling -Selector =========================================== //
//  ChatGPT Se liya hua Syntax ---> 3. Adjacent Sibling Combinator (+)
// Syntax: element1 + element2
// "Mere turant baad jo bhai hai, usi pe styling lagao." 
{/* <h1>Heading</h1>
<p>Ye select hoga ✅</p>
<p>Ye select nahi hoga ❌</p> */}
// h1 ke baad jo pehla p tag hai, wahi select hoga.



// Description: Yeh combinator target karta hai ek element ko jo immediately specified element ke baad aata hai aur dono same parent ke under hote hain.

// ========================================= General Sibling-Selector ============================================ //
//  ChatGPT Se liya hua Syntax ---> 4. General Sibling Combinator (~)
// Syntax: element1 ~ element2 
// "Mere baad jitne bhi bhai-behen hai, sab pe lagao!"
{/* <h1>Heading</h1>
<p>Ye select hoga ✅</p>
<div></div>
<p>Ye bhi select hoga ✅</p> */}
// h1 ke baad jitne bhi p tags hain (same parent mein), sab select honge.


// Description: Yeh combinator target karta hai ek element ko jo specified element ke baad aata hai, lekin immediately nahi, aur dono same parent ke under hote hain.
