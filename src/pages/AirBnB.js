import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AirBnB.module.css";

const AirBnB = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPlaceToStayClick = useCallback(() => {
    navigate("/place-to-stay");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/connect-wallet");
  }, [navigate]);

  return (
    <div className={styles.airBnBDiv}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.frameDiv2}>
            <div className={styles.rentAPlaceAwayFromHomeIn}>
              <span>{`Rent a `}</span>
              <b>
                <span className={styles.placeSpan}>Place</span>
              </b>
              <span>
                <b>{` `}</b>
                <span>{`away from `}</span>
              </span>
              <b className={styles.homeB}>Home</b>
              <span>
                <span> in the</span>
              </span>
              <b>
                <span>{` `}</span>
                <span className={styles.metaverseSpan}>Metaverse</span>
              </b>
            </div>
            <div className={styles.weProvideYouAccessToLuxur}>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.component1Div}>
                <div className={styles.rectangleDiv} />
                <div className={styles.searchForLocation}>
                  Search for location
                </div>
                <img
                  className={styles.arrowDownIcon}
                  alt=""
                  src="../arrowdown.svg"
                />
              </div>
              <div className={styles.frameDiv3}>
                <div className={styles.searchDiv}>Search</div>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv1}>
            <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
            <img className={styles.image4Icon} alt="" src="../image-4@2x.png" />
            <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
            <img className={styles.image5Icon} alt="" src="../image-5@2x.png" />
          </div>
        </div>
        <div className={styles.groupDiv2}>
          <img
            className={styles.groupIcon}
            alt=""
            src="../group.svg"
            onClick={onGroupClick}
          />
          <div className={styles.frameDiv4}>
            <div className={styles.homeDiv} onClick={onHomeTextClick}>
              Home
            </div>
            <div className={styles.homeDiv} onClick={onPlaceToStayClick}>
              Place to stay
            </div>
            <div className={styles.nFTsDiv}>NFTs</div>
            <div className={styles.nFTsDiv}>Community</div>
          </div>
          <div className={styles.frameDiv5} onClick={onFrameContainer4Click}>
            <div className={styles.groupDiv3}>
              <div className={styles.connectWalletDiv}>Connect wallet</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv6}>
        <div className={styles.groupDiv4}>
          <div className={styles.groupDiv5}>
            <div className={styles.mBTokenDiv}>MBToken</div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-59536.svg" />
        </div>
        <img className={styles.groupIcon2} alt="" src="../group-4040.svg" />
        <div className={styles.frameDiv7}>
          <img className={styles.logoIcon} alt="" src="../logo.svg" />
          <b className={styles.openSeaB}>{`OpenSea `}</b>
        </div>
      </div>
      <div className={styles.frameDiv8}>
        <b className={styles.inspirationForYourNextAdve}>
          Inspiration for your next adventure
        </b>
        <div className={styles.frameDiv9}>
          <div className={styles.frameDiv10}>
            <div className={styles.groupDiv6}>
              <div className={styles.frameDiv11}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../frame-151.svg"
                />
                <div className={styles.groupDiv7}>
                  <div className={styles.desertKingDiv}>Desert king</div>
                  <div className={styles.groupDiv8}>
                    <b className={styles.desertKingDiv}>1MBT per night</b>
                  </div>
                </div>
                <div className={styles.groupDiv9}>
                  <div className={styles.desertKingDiv}>2345km away</div>
                  <div className={styles.groupDiv10}>
                    <div className={styles.desertKingDiv}>
                      available for 2weeks stay
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv12}>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv6}>
              <div className={styles.frameDiv11}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../frame-1511.svg"
                />
                <div className={styles.frameDiv12}>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                </div>
              </div>
              <div className={styles.groupDiv7}>
                <div className={styles.desertKingDiv}>Desert king</div>
                <div className={styles.groupDiv8}>
                  <b className={styles.desertKingDiv}>1MBT per night</b>
                </div>
              </div>
              <div className={styles.groupDiv9}>
                <div className={styles.desertKingDiv}>2345km away</div>
                <div className={styles.groupDiv10}>
                  <div className={styles.desertKingDiv}>
                    available for 2weeks stay
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv6}>
              <div className={styles.frameDiv11}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../frame-1512.svg"
                />
                <div className={styles.frameDiv12}>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                </div>
              </div>
              <div className={styles.groupDiv7}>
                <div className={styles.desertKingDiv}>Desert king</div>
                <div className={styles.groupDiv8}>
                  <b className={styles.desertKingDiv}>1MBT per night</b>
                </div>
              </div>
              <div className={styles.groupDiv9}>
                <div className={styles.desertKingDiv}>2345km away</div>
                <div className={styles.groupDiv10}>
                  <div className={styles.desertKingDiv}>
                    available for 2weeks stay
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv6}>
              <div className={styles.frameDiv11}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../frame-1513.svg"
                />
                <div className={styles.frameDiv12}>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                </div>
              </div>
              <div className={styles.groupDiv7}>
                <div className={styles.desertKingDiv}>Desert king</div>
                <div className={styles.groupDiv8}>
                  <b className={styles.desertKingDiv}>1MBT per night</b>
                </div>
              </div>
              <div className={styles.groupDiv9}>
                <div className={styles.desertKingDiv}>2345km away</div>
                <div className={styles.groupDiv10}>
                  <div className={styles.desertKingDiv}>
                    available for 2weeks stay
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv10}>
            <div className={styles.groupDiv6}>
              <div className={styles.frameDiv11}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../frame-1514.svg"
                />
                <div className={styles.frameDiv12}>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                </div>
              </div>
              <div className={styles.groupDiv7}>
                <div className={styles.desertKingDiv}>Desert king</div>
                <div className={styles.groupDiv8}>
                  <b className={styles.desertKingDiv}>1MBT per night</b>
                </div>
              </div>
              <div className={styles.groupDiv9}>
                <div className={styles.desertKingDiv}>2345km away</div>
                <div className={styles.groupDiv10}>
                  <div className={styles.desertKingDiv}>
                    available for 2weeks stay
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv6}>
              <div className={styles.frameDiv11}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../frame-1515.svg"
                />
                <div className={styles.frameDiv12}>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                </div>
              </div>
              <div className={styles.groupDiv7}>
                <div className={styles.desertKingDiv}>Desert king</div>
                <div className={styles.groupDiv8}>
                  <b className={styles.desertKingDiv}>1MBT per night</b>
                </div>
              </div>
              <div className={styles.groupDiv9}>
                <div className={styles.desertKingDiv}>2345km away</div>
                <div className={styles.groupDiv10}>
                  <div className={styles.desertKingDiv}>
                    available for 2weeks stay
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv6}>
              <div className={styles.frameDiv11}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../frame-1516.svg"
                />
                <div className={styles.frameDiv12}>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                </div>
              </div>
              <div className={styles.groupDiv7}>
                <div className={styles.desertKingDiv}>Desert king</div>
                <div className={styles.groupDiv8}>
                  <b className={styles.desertKingDiv}>1MBT per night</b>
                </div>
              </div>
              <div className={styles.groupDiv9}>
                <div className={styles.desertKingDiv}>2345km away</div>
                <div className={styles.groupDiv10}>
                  <div className={styles.desertKingDiv}>
                    available for 2weeks stay
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv6}>
              <div className={styles.frameDiv11}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../frame-1517.svg"
                />
                <div className={styles.frameDiv12}>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                  <div className={styles.groupDiv11}>
                    <div className={styles.starDiv} />
                  </div>
                </div>
              </div>
              <div className={styles.groupDiv7}>
                <div className={styles.desertKingDiv}>Desert king</div>
                <div className={styles.groupDiv8}>
                  <b className={styles.desertKingDiv}>1MBT per night</b>
                </div>
              </div>
              <div className={styles.groupDiv9}>
                <div className={styles.desertKingDiv}>2345km away</div>
                <div className={styles.groupDiv10}>
                  <div className={styles.desertKingDiv}>
                    available for 2weeks stay
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv28}>
        <div className={styles.frameDiv29}>
          <img className={styles.image9Icon} alt="" src="../image-9@2x.png" />
          <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
          <img className={styles.image8Icon} alt="" src="../image-8@2x.png" />
        </div>
        <b className={styles.metabnbNFTs}>Metabnb NFTs</b>
        <div className={styles.discoverOurNFTGiftCardsCo}>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </div>
        <div className={styles.frameDiv30}>
          <div className={styles.learnMoreDiv}>Learn more</div>
        </div>
      </div>
      <div className={styles.frameDiv31}>
        <img className={styles.groupIcon3} alt="" src="../group1.svg" />
        <img
          className={styles.twitter241721979Icon}
          alt=""
          src="../twitter241721979.svg"
        />
        <img
          className={styles.instagram216721958Icon}
          alt=""
          src="../instagram216721958.svg"
        />
        <img
          className={styles.facebook263721950Icon}
          alt=""
          src="../facebook263721950.svg"
        />
        <div className={styles.groupDiv86}>
          <div className={styles.metabnbDiv}>2022 Metabnb</div>
          <img
            className={styles.ricopyrightLineIcon}
            alt=""
            src="../ricopyrightline.svg"
          />
        </div>
        <div className={styles.frameDiv32}>
          <div className={styles.groupDiv87}>
            <b className={styles.communityB}>Community</b>
            <div className={styles.groupDiv88}>
              <div className={styles.nFTDiv}>NFT</div>
              <div className={styles.tokensDiv}>Tokens</div>
              <div className={styles.landlordsDiv}>Landlords</div>
              <div className={styles.discordDiv}>Discord</div>
            </div>
          </div>
          <div className={styles.groupDiv89}>
            <b className={styles.communityB}>Places</b>
            <div className={styles.groupDiv90}>
              <div className={styles.castleDiv}>Castle</div>
              <div className={styles.farmsDiv}>{`Farms `}</div>
              <div className={styles.beachDiv}>Beach</div>
              <div className={styles.contactUsDiv}>Learn more</div>
            </div>
          </div>
          <div className={styles.groupDiv91}>
            <b className={styles.communityB}>About us</b>
            <div className={styles.groupDiv92}>
              <div className={styles.roadMapDiv}>Road map</div>
              <div className={styles.creatorsDiv}>{`Creators `}</div>
              <div className={styles.careerDiv}>Career</div>
              <div className={styles.contactUsDiv}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirBnB;
