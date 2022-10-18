import React from 'react'
import Footer from '../Footer';
import { ContactSection, ContactTitle, Span, Form, InputText, FormInput, InputEmail, InputExp, Textarea, InputSubmit } from './style.js'

const Contact = () => {
    return (
        <>
            <ContactSection>
                <div classname="container">
                    <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                    <Form action="">
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="email" placeholder="Your Email" />
                        </FormInput>
                        <InputExp type="text" placeholder="Your Subject" />
                        <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                        <InputSubmit type="submit" value="Send Message" />
                    </Form>
                </div>
                <Footer/>
            </ContactSection>
        </>
        
    )
}
export default Contact;
