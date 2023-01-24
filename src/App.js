

function App() {
  let farther = 0
  let lower = 0;
  let x=0;
  
  const testFunc = ()=>{
    let byeFunc = document.getElementById('bye')
    farther+=20
    byeFunc.style.left=farther +'px'
  }
  
  
  const newTime = () => {
    let d = new Date();
    document.getElementById('demo').innerHTML = d.toLocaleTimeString();
    console.log(d.toLocaleTimeString()==='10:28:30 AM')
  }
  
  const fallingFunc = () => {
    
    let purpCirc = document.getElementById('circ')
    //console.log(purpCirc.style.top)
    
    const drop=()=>{
      
      lower+=10;
      purpCirc.style.top = lower +'px'
    }
    if(purpCirc.style.top!=='500px'){
      //console.log(purpCirc.style.top)
    drop()
    }
    
  }
  
  const changeColor = ()=>{
    let purpCirc = document.getElementById('circ')
    let colors = ['red', 'blue', 'purple','yellow','lime']
    purpCirc.style.backgroundColor= colors[x];
    x++;
    if(x>=colors.length){
      x=0;
    }
  }
  setInterval(changeColor,1000)
  setInterval(fallingFunc,30)
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
      <div id='circ'  className='h-10 w-10 bg-purple-400 rounded-full relative'> </div>
      <button onClick={changeColor} className=' flex justify-center m-20 h-12 w-16 items-center rounded-sm bg-blue-400 text-white shadow-xl hover:bg-white hover:text-blue-800'> Try me</button>
    </div>
    
  );
}

export default App;
