const getGifs = async(category)=>{
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=FAboe4Vr7CX4uD9wSCUzXTtVHoWyejXo&q=${encodeURI(category)}&limit=6`
    const resp = await fetch(endpoint)
    const {data } = await resp.json()
    console.log(data)
   
    const parsed = data.map(({title,id,url,images:{downsized_medium:{url : img}}})=>{return{id,url,img,title}})
   return parsed
  }
  export default getGifs;