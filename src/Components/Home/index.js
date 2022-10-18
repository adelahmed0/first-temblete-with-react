import React from 'react'
import { HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, HomeDescSpan, HomeBtn } from './style.js'

const Home = () => {
    return (
        <HomeSection className="home">
            <div>
                <HomeInformation>
                    <HomeTitle>Adel Ahmed</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}
export default Home;
