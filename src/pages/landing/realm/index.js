// @import styles
import {
  RealmBack,
  RealmContainer,
  RealmContent,
  RealmContentText,
  RealmLeft,
  RealmRight,
} from "./realm.styled";
// @import resources
import back_realm from "../../../assets/images/back_realm.png";
import realm from "../../../assets/images/realm.png";

const Realm = () => {
  return (
    <RealmContainer id={"realm"}>
      <RealmContent>
        <RealmLeft>
          <img src={realm} alt={"realm"} />
        </RealmLeft>
        <RealmRight data-aos="fade-up" className="aos-init aos-animate">
          <RealmContentText>
            {
              "Hayami is a collection of 9,999 beautifully designed 3D NFTs on the ethereum blockchain."
            }
            <br />
            <br />
            {
              "Community is at the heart of Hayami, and so we've built our project with this in mind. From community funded initiatives to metaverse gaming experiences with our NFT avatars, Hayami is more than just a project: it’s a whole new world."
            }
            <br />
            <br />
            {
              "Read more about our project and find out social media profiles below. We can't wait to have you onboard!"
            }
          </RealmContentText>
        </RealmRight>
      </RealmContent>
      <RealmBack>
        <img src={back_realm} alt={"back_realm"} />
      </RealmBack>
    </RealmContainer>
  );
};

export default Realm;
