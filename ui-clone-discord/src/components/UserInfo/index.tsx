import React from 'react';

import { 
  Container, 
  Profile, 
  Avatar, 
  UserData, 
  Icons, 
  MicrofoneIcon, 
  HeadphoneIcon, 
  SettingsIcon 
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>LDNzera</strong>
          <span>#8793</span>
        </UserData>
      </Profile>

      <Icons>
        <MicrofoneIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;