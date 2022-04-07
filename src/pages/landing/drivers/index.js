// @import styles
import {
  DriverBack,
  DriverContainer,
  DriverContent,
  DriverGrid,
  DriverPart,
  DriverTitle,
} from "./drivers.styled";
// @import resources
import driver from "../../../assets/images/back2.webp";

const Drivers = () => {
  return (
    <DriverContainer>
      <DriverContent>
        <DriverBack>
          <picture>
            <img src={driver} alt={"driver-back"} />
          </picture>
        </DriverBack>
        <DriverGrid>
          <DriverPart>
            <DriverTitle>
              <div>
                <span>{"MEKA"}</span>
              </div>
              <div>
                <span>{"DRIVERS"}</span>
              </div>
              <div>
                <span>{"LATE 2022!"}</span>
              </div>
            </DriverTitle>
          </DriverPart>
        </DriverGrid>
      </DriverContent>
    </DriverContainer>
  );
};

export default Drivers;
