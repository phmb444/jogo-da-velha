import { useState } from 'react'

export default function App() {
  return <>
  <Cabeçalho/>
  <Grid/>
  
  </>
}

function Grid (){
  const [xProximo, defXProximo] = useState(true);
  const[quadrados, defQuadrados] = useState(Array(9).fill(null))
  const ganhador = calculateWinner(quadrados)
  let status
  if (ganhador) {
    status = "ganhador: " + ganhador;
  }
  else{
    status = "proximo jogador: " + (xProximo ? "X" : "O")
  }
  function noClick(i){
    if(quadrados[i] || calculateWinner(quadrados))
    {
      return;
    }
    const proximoQuadrado = quadrados.slice();
    if(xProximo)
    {
      proximoQuadrado[i] = "X";
    }
    else
    {
      proximoQuadrado[i] = "O";
    }
    defQuadrados(proximoQuadrado);
    defXProximo(!xProximo);
  }


  return <div className=' h-64 w-64 box-border flex flex-col justify-center items-center flex-center text-black' >
  <h1 className='status my-4 text-lg font-mono '>{status}</h1>
  <div className='linha h-14 my-1'>
    <Quadrado valor={quadrados[0]} noClick={() => noClick(0)}/>
    <Quadrado valor={quadrados[1]} noClick={() => noClick(1)}/>
    <Quadrado valor={quadrados[2]} noClick={() => noClick(2)}/>
  </div>
  <div className='linha h-14 my-1'>
    <Quadrado valor={quadrados[3]} noClick={() => noClick(3)}/>
    <Quadrado valor={quadrados[4]} noClick={() => noClick(4)}/>
    <Quadrado valor={quadrados[5]} noClick={() => noClick(5)}/>
  </div>  
  <div className='linha h-14 my-1'>
    <Quadrado valor={quadrados[6]} noClick={() => noClick(6)}/>
    <Quadrado valor={quadrados[7]} noClick={() => noClick(7)}/>
    <Quadrado valor={quadrados[8]} noClick={() => noClick(8)}/>
  </div>
  </div>
}

function Quadrado ({valor, noClick}){
  return <button className="w-14 h-14 box-border bg-gray-600 rounded-lg text-white m-1 text-xl flex-center p-4"  onClick={noClick}>{valor}</button>
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Cabeçalho (){
  return <header className='bg-black flex justify-center items-center h-20 absolute top-0 left-0 w-full'>
      <div className='flex space-x-8'>
      <img src="https://i.imgur.com/EiUi5C2.png" alt="" className='h-8' />
      <img src="https://i.imgur.com/9gGK7NU.png" alt="" className='h-8 animate-spin-slow' />
      <a href="https://github.com/phmb444"><img src="https://i.imgur.com/NbsLcdQ.png" alt="" className='h-10 mr-4 foto hover:cursor-pointer' /></a>
    </div>
  </header>
}