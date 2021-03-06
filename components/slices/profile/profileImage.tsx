import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";
import Image from "next/image";
import userImage from "public/images/image-avatar.jpg";

export const UserImage = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  position: relative;
  object-fit: contain;

  @media ${QUERIES.tablet} {
    height: 2.5rem;
    width: 2.5rem;
  }

  img {
    border-radius: 100%;
  }
`;

const ProfileImage = () => {
  return (
    <UserImage>
      <Image src={userImage} alt="user name" layout="fill" />
    </UserImage>
  );
};

export default ProfileImage;
