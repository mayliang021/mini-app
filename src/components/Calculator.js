import React, {useState} from "react";

function Calculator() {
  const [output, setOutput] = useState("")
  const operations = ["+", "-", "*", "/"]

  //deal with the num shows in the screen, output
  const operate = (element) => {
    let newVal = output
    if (element === "DEL") {
      newVal = newVal.slice(0, -1)
    } else if (element === ".") {
      let idx = -1
      for (let i = output.length - 1; i >= 0; i--) {
        if (operations.includes(output[i])) {
          idx = i;
          break
        }
      }
      if (!output.slice(idx).includes(".")){
        newVal += element
      }
    } else {
      let lastVal = output.slice(-1)[0]
      // if the last value is an operator, won't allow to add another one
      // if not output, won't allow to add an operator
      if (operations.includes(element)&& (operations.includes(lastVal) || !output)) return
      newVal += element
    }
    setOutput(newVal)
  }

  const clear = () => {
    setOutput("")
  }

  const operators = {
    '+': (a, b) => a + b,
    '*': (a, b) => (a * b),
    '-': (a, b) => a - b,     
    '/': (a, b) => (a / b)
  }

  const helper = (arr, ops, s) => {
    let curr = ""
    while (arr.length > 0) {
       curr = arr.shift()
       if (ops.includes(curr)) {
        let last = Number(s.pop());
        let next = Number(arr.shift());
        let res = operators[curr](last, next)
        s.push(res)
       } else {
        s.push(curr)
       }
    }
  }

  const calculate = () => {
    let res = 0;
    let curr = "";
    let arr = [];
    // add num and operator into the stack
    for(let c of output) {
      if (operations.includes(c)) {
        arr.push(curr, c);
        curr = ""
      } else {
        curr += c
      }
    }
    if (curr) {
      arr.push(curr)
    }
    // remove the last symbol if it's a operator or dot
    while (["+", "-", "*", "/", "."].includes(arr.slice(-1)[0])) {
      arr.pop()
    }
    let s = []
    helper(arr, ["*", "/"], s)
    let s2 = []
    helper(s, ["-", "+"], s2)
    res = String(s2[0].toFixed(2))
    //remove the 0 at the end after dot
    while (res.includes(".") && res.slice(-1)[0] === "0") {
      res = res.slice(0, -1)
    }
    if(res.slice(-1)[0] === ".") {
      res = res.slice(0, -1)
    }
    setOutput(res)
  }

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="screen">
          <div className="output">{output}</div>
        </div>
        <div className="main_cal">
          <div className="btn span-two" onClick={clear}>AC</div>
          {["DEL", "/", 1, 2, 3, "*", 4, 5, 6, "+", 7, 8, 9, "-", ".", 0].map(element => {
            return (
              <div 
                key={element} 
                className="btn" 
                onClick={() => operate(element)}>
                {element}
              </div>
              )
          })}
          
          <div className="btn span-two" onClick={calculate}>=</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

