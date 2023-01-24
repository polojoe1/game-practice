

function App() {
  let farther = 0
  const testFunc = ()=>{
    let byeFunc = document.getElementById('bye')
    farther+=20
    byeFunc.style.left=farther +'px'
  }
  
  
  const newTime = () => {
    let d = new Date();
    document.getElementById('demo').innerHTML = d.toLocaleTimeString();
  }
  

  return (
    <div onClick={testFunc} className="w-screen h-screen bg-red-900">
      <div className='h-24 w-24'>
        <div id='bye' className='items relative p-20  animate-bounce'>
          <div className='h-6 w-6 rounded-full bg-blue-500'></div>
          <div className='h-6 w-6 rounded-full bg-yellow-500'></div>
          <div  className='h-6 w-6 rounded-full bg-pink-500'></div>
        </div>
      </div>
      <p id='demo'>{setInterval(newTime,1000)}</p>
    </div>
  );
}

export default App;
