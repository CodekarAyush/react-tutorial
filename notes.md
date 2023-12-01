******** React intro ********* 
React ek bahut famous Library hai jisme kaafi freedom hai code krne ki . koi rigrous rules nahi hai.

ye ek bahut bada confusion rehta hai ki react library hai ya framework . Toh iss baat ko smjhne k liye hum Library ko Cool dude aur framework ko military asume krte hai. military mei bahut saare rules hote hai . koi bhi kaam aise hi nahi ho jaata lekin cool dude mei rules ki kami hai ... 

react ek library hai jiska popular frameowrk hai next js . 


After react :- react js kabhi bhi ek poora solution nahi tha frontend ka . isme koi by default seo nahi hota hai, utna behtar code nahi generate hota hai , routing options hai nahi isme , browser rendering ka issue hota hai ( broser mei code ship hota hai aur wahi se html css render hoti hai iss wajah se slow ho jaati hai ) 

iske liye humaare paas next js aur next js apna backend bhi deta hai jisse hum next mei proper application bna ske.


******** Creating a react app*********

Note :- react k liye node js install hona zaruri hai . 

react app bnaane k liye hum npx create-react-app ./project_name command terminal mei lgaana padta hai .


React mei core library react hoti hai jisme react-dom aur react-native hote hai . 
website pe kaam krne k liye react-dom use krenge 


hum react ko kisi bundle ki help se bhi install kr skte hai . jaise vite bundle 


react mei humaare paas public aur src folder hoga aur node modules hoga . 
src k ander hi humaare ui k liye saare components honge 

index.js humaare app ka entrypoint hota hai .


******** Understanding react app*********

 react k src mei index.js hota hai jo public k ander waale index.html ko target kr k UI ko html k root element mei render krta hai  . 


component :- ek aisa function jo UI return kr rha hota hai 



******* Making  a own Custom react ******

hum index mei root container bna k . JS ki help se root  element select krenge . 
fir ek object bna k usme apne element ki properties likh denge 
ex:- const reactElem = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"hey i m a link to go google "
}

aur root container ko select kr lenge . 
const mainContainer = document.querySelector("#root")

fir ek function k ander wo root div jisme ui render krna hai aur reactElem ( wo elements jo ki use honge element bnaane k liye . ) ye sb uss function mei pass krna hoga 

function customRender(reactElem,container) {
const domElem =    document.createElement (reactElem.type)
    domElem.setAttribute ('href', reactElem.props.href)  
    domElem.setAttribute ('target', reactElem.props.target)  
domElem.innerHTML = reactElem.children
container.appendChild (domElem)
}
ab lekin iss function mei genuine problem ye hai ki ye set attribut ko baar baar chalaayega aur agar props different hui toh ye dikkat krega 
ya toh sirrf ek h1 ya div tag hota toh bhi ye dikkat deta

 
 iss liye ab hum loop based code likhenge 


******* Hooks in react ******
 maan lo hume koi number ko button k click hone pe increment kraana hai toh wo directly increase kr toh dega pr UI update nahi ho rha .

 react 'react' krti hai variable k update hone pe . isse hrr jagah uss variable mei changes aa jaate hai . 
 iska sbse accha example maine counter component mei diya hai 

interview question :- 
Maan lo humne ek counter bnaaya hai , setCount k ander hum count ki value increment kra rhe hai . eg: setCount(count+1) aur issi ko baar baar kra de to value count ki kya hogi . Chaahe jitniii baar setCount lgaao sirf ek hi baar increment krega , 

useState jitne bhi updates hote hai unn sbko batches mei bhejta hai . Fibre jo ek diffing algo hai wo dekhega 'Batches mei same hi toh kaam hai toh isko baar baar q krana'
but agar humme increase krna hai toh previous counter ko leke add kraayenge 
setCounter((prev)=> prev+1 ) aise kr k krenge 



 ****** virtual dom , fibre and reconscillation ******

 createRoot method behind the scene Dom like structure  Create krta hai . Jaise browser k paas dom hota hai waisa hi create krta hai . aisa iss liye krta hai taaki aapke main dom se apne dom ko compare kra le aur khaali uss cheez ko update krta hai jo ui mei change hui hai , lekin browser poore dom ko re paint krta hai aur issi ko reloading kehte hai .

virtual dom  - react mei virtual dom concept optimization k liye use hota hai . Jab humaara react app render hota hai toh reeact createRoote function ki help se  ek virtual dom bna leta hai  . 
 
 ye virtual dom representation hoti hai real dom ki , jo ki real dom se alag hota hai . lekin isme real dom k elements k counterparts hote hai .

jb bhi ui mei kuch change hota hai toh. pehle wo virtual dom mei change hota hai aur fir isko real dom k saath compare kraata hai .

Reconciliation :- ye ek aisa process hota hai jo ye determine krta hai ki real dom or virtual dom mei kya changes hue hai 

jab bhi component re render hota hai react naya virtual dom bnaata hai aur puraane waale k saath compare kraata hai . issi process ko reconciliation bolte hai 

react reconciliation algorithm se pta chalta hai ki konse parts mei changes hua hai , aur sirf unhi parts ko update krna hai . aur isse tarah performance bhi improve ho jaati hai . 

React Fibre -  React fibre ek internal rewrite hai react ka reconciliation algorithm ka . ye asynchronnous rendering ka support provide krta hai . 

iska main goal hai better performance aur user experience . fibre architechture pause aur resume allows krta hai rerendering ko . ye bahut helpful hota hai complex UI handle krne mei qki main thread block nahi hota . 

fibre ke aane se react components ko priority mil jaati hai . 

***** Props ********  


ye ek aisa tareeka hota hai jisse hum ek component se dusre component mei data bhej skte hai kuch attribut ki tarah 

eg : <Card title="hi i m card"> yahaan maine card component mei title naam ka prop bhej diya 

ab card component k function k ander hum isse use kr skte hai 

const card = ({title})=>{
    <h1>{title}</h1>
}

kucch iss tarah se , baaki maine props ko acche se explain kiya hai card component mei 


******* Project 1 (Background color changer )********

hum use state ka use kr k usme jis bhi button pe click kr k text nikaal lenge . e.target.textcontent use kr k .


******* Project 2 ( password generator ) ********

useCallBack hook = function ko cache memory mei rkh leta hai , jitna part use ho paa rha hai usse use kr lo aur jo part nahi ho paa rha hai usse chhod do 

useCallback(Fn , dependencies (array )) , hum issi dependency array mei bss wo hrr value daale dete hai jisse humaara comunication ho rha hai . aur ye apne aap usko optimize kr deta hai .

useEffect hook = ye aisa hook hai jo component didMount pe re render krta hai component ko . useEffect hook k primary parameters callbackk aur array dependencies hote hai 

 
useRef => useRef ka use kisi bhi DOM element ki reference hasil krne aur uske saath crucial tareeke se interact krne k liye use hota hai .
eg: -  function MeraComponent() {
  const meraInputRef = useRef(null);

  useEffect(() => {
    // Component mount hone par input element par focus karna
    meraInputRef.current.focus();
  }, []);

  return <input ref={meraInputRef} />;
}

useRef ka use kr k hum kisi values ko renders k beech mei ppersist krna hota hai . 

useref ka use hota hai jab humei koi value rakhni hoti hai jo renders k dauran change hoti rhegi , lekin re renders ko trigger nahi kregi 


eg:- 
function MeraComponent() {
  const renderCount = useRef(0);

  // Ye change hone par re-renders nahi karega
  renderCount.current += 1;

  return <div>Render Count: {renderCount.current}</div>;
}



********* project  3  Currency converter ************