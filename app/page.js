"use client"
import axios from 'axios'
import React, {useState} from 'react'

const page = () => {
  const [images, setimages] = useState([])
  const getImg = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
      const data = response.data;
      console.log(data);
      setimages(data);
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <div className='container'>
      <button className='border border-white' onClick={getImg}>Get Images</button>
      <div className='p-10 '>
        {images.map((elem,i)=>{
          return <img key={i} src={elem.download_url} height={300} width={300} className='p-5 inline-block'/>
        })}
      </div>
    </div>
  )
}

export default page