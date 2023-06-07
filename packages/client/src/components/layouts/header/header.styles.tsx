import { Button } from '@/components/atoms'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Icon() {
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10.25 2.75C11.1771 2.75 12.0834 3.02492 12.8542 3.53999C13.6251 4.05506 14.2259 4.78714 14.5807 5.64367C14.9355 6.5002 15.0283 7.4427 14.8474 8.35199C14.6666 9.26127 14.2201 10.0965 13.5646 10.7521C12.909 11.4076 12.0738 11.8541 11.1645 12.0349C10.2552 12.2158 9.3127 12.123 8.45617 11.7682C7.59964 11.4134 6.86756 10.8126 6.35249 10.0417C5.83742 9.27088 5.5625 8.3646 5.5625 7.4375C5.5625 6.1943 6.05636 5.00201 6.93544 4.12294C7.81451 3.24386 9.0068 2.75 10.25 2.75ZM10.25 0.875C8.95206 0.875 7.68327 1.25988 6.60407 1.98098C5.52487 2.70208 4.68374 3.727 4.18704 4.92614C3.69034 6.12528 3.56038 7.44478 3.8136 8.71778C4.06681 9.99078 4.69183 11.1601 5.60961 12.0779C6.52739 12.9957 7.69672 13.6207 8.96972 13.8739C10.2427 14.1271 11.5622 13.9972 12.7614 13.5005C13.9605 13.0038 14.9854 12.1626 15.7065 11.0834C16.4276 10.0042 16.8125 8.73544 16.8125 7.4375C16.8125 5.69702 16.1211 4.02782 14.8904 2.79711C13.6597 1.5664 11.9905 0.875 10.25 0.875ZM19.625 27.125H17.75V22.4375C17.75 21.1943 17.2561 20.002 16.3771 19.1229C15.498 18.2439 14.3057 17.75 13.0625 17.75H7.4375C6.1943 17.75 5.00201 18.2439 4.12294 19.1229C3.24386 20.002 2.75 21.1943 2.75 22.4375V27.125H0.875V22.4375C0.875 20.697 1.5664 19.0278 2.79711 17.7971C4.02782 16.5664 5.69702 15.875 7.4375 15.875H13.0625C14.803 15.875 16.4722 16.5664 17.7029 17.7971C18.9336 19.0278 19.625 20.697 19.625 22.4375V27.125ZM19.625 2.75H29V4.625H19.625V2.75ZM19.625 7.4375H29V9.3125H19.625V7.4375ZM19.625 12.125H26.1875V14H19.625V12.125Z" />
    </svg>
  )
}

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  border-bottom: 0.0625rem solid rgba(87, 153, 69, 0.5);
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75rem;
  padding-block: 1.25rem;
  margin: 0 auto;
`

export const Navigation = styled.nav`
  display: flex;
  gap: 2.125rem;
  align-items: center;
`

export const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
  object-position: center;
`

export const Text = styled(NavLink)`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: var(--color-text);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #579945;
  }

  &.active {
    text-decoration: underline;
    color: #579945;
  }
`

export const Btn = styled(Button)`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.75rem;
`

export const Profile = styled(NavLink)`
  display: flex;
  gap: 0.625rem;
  cursor: pointer;
  color: var(--color-text);
  fill: var(--color-text);

  &.active {
    color: #579945;
    fill: #579945;
  }
`

export const User = styled.p`
  font-size: 1.25rem;
  line-height: 1.6875rem;

  &:hover {
    text-decoration: underline;
    color: #579945;
  }
`
export const StyledIconWrapper = styled(Icon)``
