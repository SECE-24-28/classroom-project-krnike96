import React from "react";
import { OurPromiseStyle } from "./our-promise-style";
import {
  FaLaptopCode,
  FaPeopleGroup,
  FaDiamondTurnRight,
  FaLifeRing,
  FaShieldHalved,
} from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";

const OurPromiseComponent = () => {
  return (
    <OurPromiseStyle>
      <div className="parent">
        <div className="main-title">
          <h2 className="title">Our Promise</h2>
          <p className="top-child-content">
            As part of our high quality service, we'd like to offer something
            extra too.
          </p>
        </div>
        <div className="promises">
          <div className="element top-code">
            <div className="item">
              <div>
                <FaLaptopCode className="code-icon"></FaLaptopCode>
              </div>
              <div className="item-title">Top Code Quality</div>
            </div>
            <div className="elem-content">
              Our commitment goes beyond mere code - it encompasses providing
              solutions. You receive W3C fully compliant markup, without any
              compromise on quality.
            </div>
          </div>
          <div className="element responsiveness">
            <div className="item">
              <div>
                <MdOutlinePhoneIphone className="responsiveness-icon" />
              </div>
              <div className="item-title">Responsiveness</div>
            </div>
            <div className="elem-content">
              We understand the value of a positive attitude, timely
              responsiveness, and adaptability. We're dedicated to attentively
              listening and leveraging our utmost capabilities to serve you.
            </div>
          </div>
          <div className="element rockstar-team">
            <div className="item">
              <div>
                <FaPeopleGroup className="rockstar-icon" />
              </div>
              <div className="item-title">Rockstar Team</div>
            </div>
            <div className="elem-content">
              Our expertise is our unique selling proposition. You'll have
              access to an all-star team of experienced professionals fully
              dedicated to serving you, armed with coding skills that are truly
              exceptional.
            </div>
          </div>
          <div className="element fast-turn-arounds">
            <div className="item">
              <div>
                <FaDiamondTurnRight className="fast-icon" />
              </div>
              <div className="item-title">Fast Turn-arounds</div>
            </div>
            <div className="elem-content">
              The importance of speed is on par with quality for us. We are
              swift, nimble, and capable of providing high-quality code within a
              timeframe that suits your preferences.
            </div>
          </div>
          <div className="element life-time-support">
            <div className="item">
              <div>
                <FaLifeRing className="life-time-icon" />
              </div>
              <div className="item-title">Life-time support</div>
            </div>
            <div className="elem-content">
              Our commitment to code quality is exemplified by our enduring
              support. If any bugs happen to emerge in the future, feel free to
              reach out to us for assistance.
            </div>
          </div>
          <div className="element secured-agreement">
            <div className="item">
              <div>
                <FaShieldHalved className="secured-icon" />
              </div>
              <div className="item-title">Secured Agreement</div>
            </div>
            <div className="elem-content">
              The creative work you receive is entirely your own, and we
              unequivocally respect that. We assure you of our commitment and
              readiness to formalize this with a Non-Disclosure Agreement (NDA).
            </div>
          </div>
        </div>
      </div>
    </OurPromiseStyle>
  );
};

export default OurPromiseComponent;
