import React from 'react'

type BProps = {}
type BState = {
  totalScore: number;
}

type AProps = {}
type AState = {
  totalScore: number;
}

function getCurrentScore() {
  return 100
}

function getScoreByBoardName(boardName:String) {
  if(boardName === 'boardA'){
    return 200
  }
  if(boardName === 'boardB'){
    return 1000
  }
  return 0
}

class ScoreBoardB extends React.Component<BProps, BState> {
  constructor(props:BProps){
    super(props)
    this.state = {
      totalScore: 0
    }
  }

  // 組件被安裝時
  componentsDidMount() {
    this.setState({
      totalScore: getCurrentScore() + getScoreByBoardName('boardB')
    })
  }

  render(): React.ReactNode {
    return <>
    <p>B Total Score: {this.state.totalScore}</p>
    </>
  }
}

class ScoreBoardA extends React.Component<AProps, AState> {
  constructor(props:AProps){
    super(props)
    this.state = {
      totalScore: 0
    }
  }

  // 組件被安裝時
  componentsDidMount() {
    this.setState({
      totalScore: getCurrentScore() + getScoreByBoardName('boardA')
    })
  }

  render(): React.ReactNode {
    return <>
    <p>B Total Score: {this.state.totalScore}</p>
    </>
  }
}


function Main() {
  return <>
    <ScoreBoardA />
    <ScoreBoardB />
  </>
}

export default Main