import styles from "./Gallery.module.css";
import { useState, useEffect } from 'react'

function Gallery() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  

  useEffect(() => {
    setLoading(true)
    fetch('http://172.16.20.200:3080/displaycam')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div className={'image-container'}>
      
      {data ? data.map(data =>(
          <img src ={`data:image/png;base64, ${data.data}`} className={'image'} width={300} height={300}></img>
          
      )) :(<p> Loading</p>)}
      <p>{'${date_time}'}</p>
    </div>
  )
}
export default Gallery;

