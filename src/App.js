// parent component
import React, { useState , useEffect } from 'react';
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  // kiri -> getter
  // kanan -> setter
const [pacarSaya , setPacarSaya] = useState(1)
const [namaPacar , setNamaPacar] = useState("")

  useEffect (() => {
    if(pacarSaya == 1){
      setNamaPacar("Lee Chaeyoung")
    } else {
      setNamaPacar("Ahn Yujin")
    }
  }, [pacarSaya])

  return (
    <>
    <h5>Nama pacar: {namaPacar}</h5>
    <h1>Saya memiliki: {pacarSaya} pacar</h1>
    <button onClick = {() => setPacarSaya((prev) => prev + 1)}>tambah pacar</button>
    <button onClick = {() => setPacarSaya((prev) => prev - 1)}>putuskan pacar</button>
    </>
  );
}

export default App;
