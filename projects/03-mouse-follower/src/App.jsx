import { useEffect, useState } from "react"

const FollowMousse = () => {

  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0})

  //  pointer move
  useEffect(() => {
    
    console.log('effect', {enabled});

    const handleMove = (event) => {
      //clientX y clientY da la posicion del puntero del cliente
      const { clientX, clientY} = event
      console.log('handleMove', {clientX, clientY })
      setPosition({x: clientX, y: clientY})
    }

    //el addEventListener, solo queremos que funcione si el enabled es true, si es false que se desactive
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //  cleanup:
    //   ==> se ejecuta cuando el elemento se desmonta
    //   ==> y cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
      setPosition({x: 0, y: 0})
    }
  }, [enabled])
  
  // change body className
  useEffect(()=> {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    }
  }, [enabled])
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: .8,
        pointerEvents:'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App() {
  //const [mounted, setMounted] = useState(true)
  return (
    <main>
      <FollowMousse />
      {/* {mounted && <FollowMousse />}
      <mounted/>
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse component
      </button> */}
    </main>
  )
}

export default App
