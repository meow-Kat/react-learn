// 只要是 use 開頭都是使用 Hook
import { useState, useEffect } from 'react'

function getCurrentScore() {
  return 100
}

function getScoreByBoardName(boardName:String) {
  if (boardName === 'boardA') {
    return 200
  } 
  if (boardName === 'boardB') {
    return 1000
  } 
  return 0
}

// 自訂義 Hook
function useGetTotalScore(boardName: string){
  // [顯示的數字, 改變數字調用的方法] = 預設 0
  const [score, setScore] = useState(0)
  // 變動分數
  // 只接受兩個參數 ( callback function () => {} , [各種不同的變數 , ...etc] )，陣列內的數值變動的話裡面 useEffect 就會重新執行一次
  useEffect(() => {
    const currentScore = getCurrentScore() + getScoreByBoardName(boardName)
    setScore(currentScore)
  },[])

  return score
}


const ScoreBoardB: React.FC = () => {
  // const [score, setScore] = useState(0)

  // React 的 Hook 會去追蹤每個調用情況，如果其中一次沒有調用到追蹤方式會被打亂，所以不要再 Hook 前加判斷式
  // if (score === 100) return null

  // useEffect(() => {
  //   const currentScore = getCurrentScore() + getScoreByBoardName('boardB')
  //   setScore(currentScore)
  // },[])

  const score = useGetTotalScore('boardB')

  return <p>B Total Score: {score}</p>
}

const ScoreBoardA: React.FC = () => {
  // const [score, setScore] = useState(0)
  // useEffect(() => {
  //   const currentScore = getCurrentScore() + getScoreByBoardName('boardA')
  //   setScore(currentScore)
  // },[])

  const score = useGetTotalScore('boardA')

  return <p>A Total Score: {score}</p>
}



const Main: React.FC = () => {
  return <>
    <ScoreBoardA />
    <ScoreBoardB />
  </>
}

export default Main