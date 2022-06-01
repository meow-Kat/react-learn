import React, { useEffect,useState } from 'react';

// 注意類型
type Comment = {
  postId: number
  id: number
  name:string
  email: string
  body: string
}

const App:React.FC = () => {

  const [postId, setPostId] = useState(1)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)


  console.log('postId',postId);
  

  async function fetchData(id: number) {
    // loading 畫面
    setLoading(true)
    // 錯誤處理
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      const data = await res.json() as Comment[]
      console.log('data', data);

    } catch (error) {
      setError(error as Error)
    }
    setLoading(false)

  }

  function clickHandler(id: number) {
    setPostId(id)
  }

  // 不能直接使用 async function 用法
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    // .then(res => res.json())
    // .then( (data: Comment[]) => {
    //   console.log('data', data);
    // })
    
    fetchData(postId)
  },[postId])

  return <>
    <h1>Fetch</h1>
    <button onClick={() => clickHandler(1)}>ID 1 Data</button>
    <button onClick={() => clickHandler(2)}>ID 2 Data</button>
    {
      error === null ? <p style={{ color:'green' }}>資料獲取成功</p> : <p style={{ color:'red' }}>資料獲取失敗</p>
    }
    {
      loading ? <p>loading</p> : null
    }
  </>
}

export default App

// 使用服務 JSONPlaceholder 