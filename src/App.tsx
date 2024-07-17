import { useEffect } from 'react'
import Styles from './App.module.css'

function App() {

  useEffect(() => {
    const bodyEl = document.querySelector('body')
    const handleMouseMove = (event: { pageX: unknown; pageY: unknown }) => {
      const xPos = event.pageX;
      const yPos = event.pageY;
      const spanEl = document.createElement("span");
      spanEl.className = Styles.span;
      spanEl.style.left = xPos + "px";
      spanEl.style.top = yPos + "px";
      const size = Math.random() * 100;
      spanEl.style.width = size + "px";
      spanEl.style.height = size + "px";
      bodyEl?.appendChild(spanEl)
      setTimeout(() => {
        spanEl.remove();
      }, 3000)

    }

    bodyEl?.addEventListener("mousemove", handleMouseMove);

    return () => {
      bodyEl?.removeEventListener("mousemove", handleMouseMove);
    }

  }, [])


  return (
    <div className={Styles.body}>
      <h1 className={Styles.title}> Heart Line</h1>
    </div>
  )
}

export default App
