import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SerchInput } from "./components/molecules/SerchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "はな",
  image: "https://source.unsplash.com/Sg3XwuEpybU",
  email: "11111@aa.com",
  phone: "000-3344-5566",
  company: { name: "ああああああ株式会社" },
  website: "https://www.google.com/?hl=ja"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <br />
      <SecondaryButton>テスト2</SecondaryButton>
      <br />
      <SerchInput />
      <br />
      <UserCard user={user} />
    </div>
  );
}
