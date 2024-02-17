import img from './financeBgImage.jpg'
import { InputBox } from './component'
import useCurrency from './hook/useCurrency'
import { useEffect, useState } from 'react'
import Button from './component/Button';

function App() {

  const [from, setFrom] = useState('USD');
  const currency = useCurrency(from);
  const [to, setTo] = useState('INR');
  const [amount, setAmount] = useState(1)
  const [convertedValue, setConvertedValue] = useState(currency[to]*amount);

  
  const currencyOptions = Object.keys(currency);

  const handleSubmit = () =>{
    let value = currency[to]*amount;
    setConvertedValue(value.toFixed(2));
  }
  
  
  useEffect(()=>{
    handleSubmit();
  },[amount, from, to, currency])
  
  return (
    <>
      <div className='w-screen h-screen  bg-cover flex justify-center items-center' style={{backgroundImage:`url(${img})`}}>
        <div className='bg-[rgba(17, 25, 40, 0.75)] w-[90%] max-w-md rounded-[12px] border-[1px] border-[rgba(255, 255, 255, 0.125)] backdrop-blur-[40px] backdrop-saturate-[180%] p-2' >
          <form action="">
            <InputBox amount={amount} setAmount={setAmount} label="From" allowed={true} from={from} currencyOptions={currencyOptions} setFrom={setFrom} 
            />
            <InputBox convertedValue={convertedValue} amount={amount} setAmount={setAmount} label="To" to={to} allowed={false} setTo={setTo}  currencyOptions={currencyOptions}/>
            {/* <Button  From={from} To={to} handleSubmit={handleSubmit} /> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default App
