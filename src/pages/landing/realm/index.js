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
    <RealmContainer>
      <RealmContent>
        <RealmLeft>
          <img src={realm} alt="realm" />
        </RealmLeft>
        <RealmRight>
          <RealmContentText>
            {
              "Laborum id minim reprehenderit labore eiusmod id nostrud aute ipsum veniam ea eiusmod tempor. Proident sint ipsum laboris veniam Lorem. Sint fugiat commodo dolor minim id. Deserunt duis ut consectetur est veniam est velit ipsum nulla non."
            }
            <br />
            <br />
            {
              "Exercitation esse minim ad pariatur et non non adipisicing ullamco velit veniam reprehenderit officia. Voluptate ea irure et amet est in consectetur nisi ullamco amet in aliqua qui."
            }
          </RealmContentText>
        </RealmRight>
      </RealmContent>
      <RealmBack>
        <img src={back_realm} alt="back_realm" />
      </RealmBack>
    </RealmContainer>
  );
};

export default Realm;
