import React ,{useId} from 'react'

const InputBox = ({label, allowed = false ,from = 'USD', to ='INR', setFrom, setTo, amount, setAmount, currencyOptions, convertedValue}) => {

  const id = useId();
  function handleCurrencySelection(e){
    if(setFrom){
      setFrom(e.target.value);
      console.log(e.target.value)
      return
    }
    else{
      setTo(e.target.value)
    }
  }
  return (
    <div className='flex flex-col border-[1px] rounded-md px-2 py-1 m-2 border-white'>
      <label className='text-white' htmlFor={id}>{label}</label>
      <div className='flex flex-row justify-between gap-8 items-center'>
        <input type="number" value={(allowed && Number(amount)) || convertedValue}
        onChange={(e)=> allowed && setAmount(Number(e.target.value))}
        readOnly={!allowed}
        className='bg-transparent border-none outline-none text-white' />
        <select 
        onChange={handleCurrencySelection}
        className='bg-transparent px-2 text-white outline-none overflow-y-scroll no-scrollbar w-[100px]' name="currency" id="" value={label == 'From'? from : to}>
          {currencyOptions.map((data)=>(
            <option key={data} className='bg-black text-white ' value={data}>{data}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox