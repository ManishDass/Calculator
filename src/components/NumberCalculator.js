import React, { useReducer, useEffect } from 'react'
import style from '../style/Number.module.css';
import deleteIcon from '../assets/delete.svg'

let initialState = {
  previousOperend: '',
  operation: '',
  currentOperend: ''
}

const reduce = (state, { type, payload }) => {
  switch (type) {

    case 'add-digit':
      if(Number(payload) === 0 && Number(state.currentOperend) === 0) return state
      if(String(payload) === '.' && state.currentOperend.includes('.')) return state //avoid extra . 
      return {
        ...state,
        currentOperend: state.currentOperend + String(payload) //Add previous value + current value
      }

    case 'delete-digit':

      
      if (state.currentOperend !== '' || state.currentOperend !== undefined) {
        let str = state.currentOperend;
        str = str.substring(0, str.length - 1); //delete last char
        return {
          ...state,
          currentOperend: str
        }
      }
      else if (state.operation !== '') {
        return {
          ...state,
          operation: '' //removes operations symbool
        }
      }
      else if (state.previousOperend !== '') {
        let str = state.previousOperend;
        str = str.substring(0, str.length - 1);
        return {
          ...state,
          previousOperend: str
        }
      }
      break

    case 'choose-operations':
      return {
        previousOperend: state.currentOperend,
        operation: payload,
        currentOperend: ''
      }

    case 'evaluate':
      console.log(state)
      if (state.currentOperend === '') {
        return state

      }
      else if (state.operation === '') {
        return state
      }

      // else if (state.previousOperend.includes('..') || state.currentOperend.includes('..')) {
      //   let x = ''
      //   if (state.previousOperend.includes('..')) {
      //     x = state.previousOperend.replaceAll('.', '')
      //     return {
      //       ...state,
      //       previousOperend: x
      //     }
      //   }
      //   else if (state.currentOperend.includes('..')) {
      //     x = state.currentOperend.replaceAll('.', '')
      //     return {
      //       ...state,
      //       currentOperend: x
      //     }
      //   }
      // }
      else {
        // let res = eval(state.previousOperend + state.operation + state.currentOperend) //dont use eval
        if(state.previousOperend !== undefined )
        {
          let res = evaluate(state.previousOperend, state.currentOperend, state.operation)
          return {
            currentOperend: res,
          }
        }
        else
        {
          return state;
        }
      }

    case 'clear':
      return initialState;

    default:
      return state;
  }
}

//custom function instead of eval
function evaluate(previousOperend, currentOperend, operation) {
  let a = Number(previousOperend)
  let b = Number(currentOperend)
  let res = ''

  console.log("previous: ",previousOperend)
  console.log("current: ",currentOperend)
  console.log("operation: ",operation)
  if(previousOperend !== undefined )
  {
    console.log("ghus gya")
    switch(operation)
    {
      case '+':
        res = String(a + b);
        break
      case '-':
        res = String(a - b);
        break
      case '÷':
        res = String(a / b);
        break
      case 'x':
        res = String(a * b);
        break
      case '%':
        res = String(a % b);
        break
    }

    return res
  }
}

const NumberCalculator = () => {
  useEffect(()=>{
    document.title = "Calculator - Number"
  },[])

  const [{ previousOperend, operation, currentOperend }, dispatch] = useReducer(reduce, initialState)
  return (
    <div>
      <main className={style.numberWrapper}>
        <p className={style.inputOutput}>{previousOperend}{operation}{currentOperend} {currentOperend === '' && previousOperend === '' && operation === '' && '0'} </p>
        <input className={style.a} type='button' value='AC' onClick={(e) => dispatch({ type: 'clear', payload: 0 })} />
        <button className={style.b} type="submit" onClick={(e) => dispatch({ type: 'delete-digit' })} ><img alt='deleteIcon' src={deleteIcon} className={style.icon} ></img> </button>
        <input className={style.c} type='button' value='%' onClick={(e) => dispatch({ type: 'choose-operations', payload: '%' })} />
        <input className={style.d} type='button' value='÷' onClick={(e) => dispatch({ type: 'choose-operations', payload: '÷' })} />

        <input className={style.e} type='button' value='7' onClick={(e) => dispatch({ type: 'add-digit', payload: 7 })} />
        <input className={style.f} type='button' value='8' onClick={(e) => dispatch({ type: 'add-digit', payload: 8 })} />
        <input className={style.g} type='button' value='9' onClick={(e) => dispatch({ type: 'add-digit', payload: 9 })} />
        <input className={style.h} type='button' value='x' onClick={(e) => dispatch({ type: 'choose-operations', payload: 'x' })} />

        <input className={style.i} type='button' value='4' onClick={(e) => dispatch({ type: 'add-digit', payload: 4 })} />
        <input className={style.j} type='button' value='5' onClick={(e) => dispatch({ type: 'add-digit', payload: 5 })} />
        <input className={style.k} type='button' value='6' onClick={(e) => dispatch({ type: 'add-digit', payload: 6 })} />
        <input className={style.l} type='button' value='−' onClick={(e) => dispatch({ type: 'choose-operations', payload: '-' })} />

        <input className={style.m} type='button' value='1' onClick={(e) => dispatch({ type: 'add-digit', payload: 1 })} />
        <input className={style.n} type='button' value='2' onClick={(e) => dispatch({ type: 'add-digit', payload: 2 })} />
        <input className={style.o} type='button' value='3' onClick={(e) => dispatch({ type: 'add-digit', payload: 3 })} />
        <input className={style.p} type='button' value='+' onClick={(e) => dispatch({ type: 'choose-operations', payload: '+' })} />

        <input className={style.q} type='button' value='0' onClick={(e) => dispatch({ type: 'add-digit', payload: 0 })} />
        <input className={style.r} type='button' value='.' onClick={(e) => dispatch({ type: 'add-digit', payload: '.' })} />
        <input className={style.s} type='button' value='=' onClick={(e) => dispatch({ type: 'evaluate', payload: '=' })} />
      </main>
    </div>
  )
}

export default NumberCalculator