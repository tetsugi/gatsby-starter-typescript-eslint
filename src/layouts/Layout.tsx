import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Layout: React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default Layout
