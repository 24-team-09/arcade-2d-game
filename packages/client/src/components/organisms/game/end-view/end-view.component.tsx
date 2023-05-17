import { Link } from 'react-router-dom'
import { FC, useState, useEffect } from 'react'
import { EndViewProps } from './end-view.types'
import { BtnText, Content } from '../game.styles'
import { BtnStart, Title, Score, Footer, Wrapper } from './end-view.styles'
import { useGameStore } from '@/store/gameStore'

export const EndView: FC<EndViewProps> = ({ onClickStartGame, outcome }) => {
  const { score, resetGame } = useGameStore()
  const [title, setTitle] = useState('')

  const handlerStartGame = () => {
    resetGame()
    onClickStartGame()
  }

  useEffect(() => {
    if (outcome === 'win') {
      setTitle('YOU WON!')
    } else if (outcome === 'lose') {
      setTitle('YOU LOSE!')
    }
  }, [outcome, score])

  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Score>SCORE: {score}</Score>
        <Footer>
          <Link to="/forum">
            <BtnText
              as="button"
              type="button"
              color="#fff"
              variant="text"
              disabled={false}>
              Forum
            </BtnText>
          </Link>
          <Link to="/statistics">
            <BtnText
              as="button"
              type="button"
              color="#fff"
              variant="text"
              disabled={false}>
              Leaderboard
            </BtnText>
          </Link>
          <BtnStart
            as="button"
            type="button"
            color="#fff"
            variant="contained"
            disabled={false}
            onClick={handlerStartGame}>
            Retry
          </BtnStart>
        </Footer>
      </Content>
    </Wrapper>
  )
}
