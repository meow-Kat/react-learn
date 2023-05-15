import React, { useEffect,useState } from 'react';

// 注意類型
type Comment = {
  postId: number
  id: number
  name:string
  email: string
  body: string
}

// 自訂義 hook
function useFetchApi() {
  const [postId, setPostId] = useState(1)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)
  // 建立空陣列
  const [data, setData] = useState([] as Comment [])

  async function fetchData(id: number) {
    // loading 畫面
    setLoading(true)
    // 錯誤處理
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      const resData = await res.json() as Comment[]
      // set 進去
      setData(resData)

    } catch (error) {
      setError(error as Error)
    }
    setLoading(false)

  }

  // 必須要使用 useEffect 去 fetchData，如果沒有 useEffect fetchData 會產生渲染的內容(需要設定 error 或 loading 等等)，進而重新選染造成無窮迴圈
  useEffect(() => {
    fetchData(postId)
  },[postId])

  // 被推斷陣列順序，加入 as const 變成元組 可以把陣列的位置變成 return 陣列後的位置
  return [data,loading,error,setPostId] as const
  // 如果回傳物件可以不用 as const 但不符合 react 規則
  // return { data,loading,error,setPostId }
}

const App:React.FC = () => {

  const [data,loading,error,setPostId] = useFetchApi()
  // 如果回傳物件 
  // const { data,loading,error,setPostId } = useFetchApi()

  function clickHandler(id: number) {
    setPostId(id)
  }

  // 寫在這邊不寫在函式內是為了控制獲取的次數
 

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
    <p>結果：</p>
    {
      // 用 map 秀出來需要有一個 key
      data.length > 0 && data.map( (item,index) => {
        // key 是唯一值，幫助判斷什麼資料需要重新渲染，不要使用 index 作為重新渲染依據
        return <p key={item.id}>{item.email}</p>
      })
    }
  </>
}

export default App

// 使用服務 JSONPlaceholder 