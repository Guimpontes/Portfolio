import React from 'react';
import { ErrorTitle } from './style';
import { Container } from '../../styles/GlobalStyles';

export default function NotFound() {
  return (
    <Container>
      <ErrorTitle>PAGE NOT FOUND 404<i className="uil uil-exclamation-octagon"></i></ErrorTitle>
    </Container>
  )
}
