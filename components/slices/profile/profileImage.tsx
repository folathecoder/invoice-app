import styled from "styled-components";
import type { NextPage } from "next";
import Image from "next/image";
import userImage from "public/images/image-avatar.jpg";

export const UserImage = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  position: relative;
  object-fit: contain;

  img {
    border-radius: 100%;
  }
`;

const ProfileImage: NextPage = () => {
  return (
    <UserImage>
      <Image src={userImage} alt="user name" layout="fill" />
    </UserImage>
  );
};

export default ProfileImage;
