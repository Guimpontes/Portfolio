import React from 'react';
import * as C from './style'

export default function Alert(props) {

  return (
    <C.AlertContainer show={props.show}>
        <C.AlertContent>{props.content}</C.AlertContent>
    </C.AlertContainer>
  )
}
