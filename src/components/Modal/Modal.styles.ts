import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};

  display: flex;
  align-items: center;
  justify-content: center;
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.backdrop};
  opacity: 0.8;
`
const Content = styled.div`
  min-width: 24rem;
  max-width: 32rem;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.sizes.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.xl};
  background: ${({ theme }) => theme.colors.white};
  position: relative;
`

export { Backdrop, Content, Wrapper }
