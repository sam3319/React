import React from "react";
import styled from "styled-components";
import profileImg from '../../img/profile1.png';

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

const ProfileImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 8px;
    margin-bottom: 0 !important;
`;

const ProfileName = styled.small`
    margin-right: 8px;
    margin-bottom: 0 !important;

`;

const ProfileTime = styled.small`
    color: gray;
    margin-bottom: 0 !important;
`;

function ProfileInfo({ author, time, children }){
    return(
         <ProfileContainer>
            <ProfileImage src={profileImg}/>
            <ProfileName>{author}</ProfileName>
            {time && <ProfileTime>{time}</ProfileTime>}
            {children}
        </ProfileContainer>
    );
}

export default ProfileInfo;