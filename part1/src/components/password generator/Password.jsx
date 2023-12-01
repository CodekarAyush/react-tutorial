import React, { useCallback, useEffect, useRef, useState } from "react";

const Password = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charecter, setCharecter] = useState(false);
  const [password, setPassword] = useState("");

  const copyClip  = useCallback(()=>{
passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "asdfghjklqwertyuiopzxcvbnmASDFGHJKLQWERTYUIOPZXCVBNM";
    if (number) {
      str += "1234567890";
    }
    if (charecter) {
      str += "!@#$%^&*()_+{}:,./-=";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, charecter, setPassword]);


  useEffect(() => {
  passwordGen()
}, [length, number, charecter, passwordGen]);


const passwordRef = useRef(null)


  return (
    <>
    <div className="content px-5">

    <h1 className="text-black text-3xl font-semibold text-center py-4">Password Generator</h1>

    <p>Isko bnaane k liye maine useRef useCallback aur use effect ka use kiya hai . Ab baari baari se smjhte hai konsa hook kya impact daal rha hai  </p>
    <p><b>UseCallback</b> :  iss hook ka use krte hai jab humein ek component ko props k roop mei pass krna ho , lekin uss component ka re render harr baar na hona chaiye . <br /> </p>
    </div>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">

      <div className="flex p-5 shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder="password "
          readOnly
          ref={passwordRef}
   
        />
        <button onClick={copyClip} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>
      <div className="flex p-4 text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);

            }}
            className="cursor-pointer"
          />
          <label htmlFor="">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={number} id="numberInput" onChange={()=>{setNumber(prev=>!prev)}} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={charecter} id="charecterInput" onChange={()=>{setCharecter(prev=>!prev)}} />
          <label htmlFor="charecterInput">Charecter</label>
        </div>
      </div>
    </div>
    </>
  );
};

export default Password;
