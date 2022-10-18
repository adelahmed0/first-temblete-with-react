import React from 'react'
import { Socialmedia, Social, Icon, SocialDesc, Span, SpanInfo } from './style.js'
import axios from 'axios'

class SocialMedia extends React.Component {
    state = {
        social:[]
    }
    componentDidMount() {
        axios.get('js/data.json')
            .then(res =>
            {
                this.setState({ social: res.data.social })
            })
    }
    render() {
        const { social } = this.state;
        const socialList = social.map((socialitem) => {
            return (
                <Social item={socialitem.id} key={socialitem.id}>
                    <Icon className={socialitem.icon}></Icon>
                    <SocialDesc>
                        <Span>{socialitem.title}</Span>
                        <SpanInfo>{socialitem.body}</SpanInfo>
                    </SocialDesc>
                </Social>
            )
        })
        return (
            <Socialmedia>
                {socialList}
            </Socialmedia>
        )
    }
}
export default SocialMedia;
