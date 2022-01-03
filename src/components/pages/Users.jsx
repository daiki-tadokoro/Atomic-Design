import { SecondaryButton } from "../atoms/button/SecondaryButton";
import styled from "styled-components";

import { SerchInput } from "../molecules/SerchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `はな${val}`,
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    email: "11111@aa.com",
    phone: "000-3344-5566",
    company: { name: "ああああああ株式会社" },
    website: "https://www.google.com/?hl=ja"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SerchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fix, minmax(200px, 1fr));
  grid-gap: 20px;
`;
