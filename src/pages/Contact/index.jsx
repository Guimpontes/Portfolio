import React, { useRef, useState } from 'react'
import { Container } from '../../styles/GlobalStyles';
import * as C from './style';
import emailjs from '@emailjs/browser';
import Alert from '../../components/Alert';


export default function Contact() {
    const form = useRef();
    const [showAlert, setShowAlert] = useState({});

    function onShowAlert(content) {
        setShowAlert({ status: true, content: content });

        setTimeout(() => {
            setShowAlert({ status: false, content: "" });
        }, 4000)
    }


    function sendMessage(e) {
        e.preventDefault()

        emailjs.sendForm('service_woc3494', 'template_f8xr86c', form.current, '5N666VoMuRIcdvfg4')
            .then((result) => {
                onShowAlert("Your message was sent. Thank you for trusting my work.")
                e.target.reset();
            }, (error) => {
                onShowAlert("It was not possible to send your message")
            });
    }

    return (
        <>
            <Alert content={showAlert.content} show={showAlert.status} />
            <Container>
                <C.PageTitle>CONTACT</C.PageTitle>

                <C.ContactText>If you like me, <span>please get in touch.</span></C.ContactText>

                <C.FormContact ref={form} onSubmit={sendMessage}>
                    <C.FieldName>
                        <input type="text" name="name" id="name" minLength="1" required />
                        <label htmlFor="name">Name</label>
                    </C.FieldName>

                    <C.FieldEmail>
                        <input type="text" name="email" id="email" required />
                        <label htmlFor="email">E-mail</label>
                    </C.FieldEmail>

                    <C.FieldMessage>
                        <textarea rows="10" name="message" id="message" required></textarea>
                        <label htmlFor="message">Message</label>
                    </C.FieldMessage>

                    <C.ButtonSend>
                        <button type="submit">SEND <i className="uil uil-message"></i></button></C.ButtonSend>
                </C.FormContact>
            </Container>
        </>
    )
}
