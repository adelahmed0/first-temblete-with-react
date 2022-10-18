import styled from 'styled-components'

export const ProfileSection = styled.div`
padding: 50px 0;
    overflow: hidden;
`;

export const Profilee = styled.div`
    width: 50%;
    float: left;
`;

export const ProfileList = styled.ul`
    list-style: none;
`;

export const ProfileItem = styled.li`
    margin-bottom: 8px;
`;

export const ProfileItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: ${props => props.web ? "normal" : "bold"};
    color: ${props => props.web ? "#eb5424" : "bold"};
    
`;

export const ProfileTitle = styled.h2`
    font-size: 40px;
    margin-bottom: 20px;
`;

export const ProfileSkills = styled.div`
    width: 50%;
    float: left;
`;

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`;

export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
`;
export const SkillsBarT = styled.span`
    float: left;
`;
export const SkillsBarE = styled.span`
    float: right;
    margin-right: 100px;
`;
export const SkillsBarP = styled.span`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`;
export const SkillsBarPSpan1 = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
`;

export const SkillsBarPSpan2 = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: 90%;
`;
export const SkillsBarPSpan3 = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: 80%;
`;


