import React from 'react'
import { ProfileSection, Profilee, ProfileList, ProfileItem, ProfileItemSpan, ProfileTitle, ProfileSkills, SkillsDesc, SkillsBar, SkillsBarT, SkillsBarE, SkillsBarP, SkillsBarPSpan1, SkillsBarPSpan2, SkillsBarPSpan3 } from './style.js'

function Profile() {
    return (
        <ProfileSection>
            <div className="container">
                <Profilee>
                    <ProfileTitle><span>My </span>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Adel Ahmed
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            16/3/2002
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Al Haram
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <ProfileItemSpan web>www.google.com</ProfileItemSpan>
                        </ProfileItem>
                    </ProfileList>
                </Profilee>

                <ProfileSkills>
                    <ProfileTitle>Some <span>skills</span></ProfileTitle>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <SkillsBar>
                        <SkillsBarT>Bootstrap</SkillsBarT>
                        <SkillsBarE>100%</SkillsBarE>
                        <SkillsBarP>
                            <SkillsBarPSpan1></SkillsBarPSpan1>
                        </SkillsBarP>
                    </SkillsBar>

                    <SkillsBar>
                        <SkillsBarT>CSS3</SkillsBarT>
                        <SkillsBarE>90%</SkillsBarE>
                        <SkillsBarP>
                            <SkillsBarPSpan2></SkillsBarPSpan2>
                        </SkillsBarP>
                    </SkillsBar>

                    <SkillsBar>
                        <SkillsBarT>Photoshop</SkillsBarT>
                        <SkillsBarE>80%</SkillsBarE>
                        <SkillsBarP>
                            <SkillsBarPSpan3></SkillsBarPSpan3>
                        </SkillsBarP>
                    </SkillsBar>
                </ProfileSkills>

            </div>
        </ProfileSection>
    )
}
export default Profile;
