import React, { useState } from 'react';
import * as C from './style'

export default function Alert(props) {
    console.log(props.show)

  return (
    <C.AlertContainer show={props.show}>
        <C.AlertContent>{props.content}</C.AlertContent>
    </C.AlertContainer>
  )
}
