import AdsCardComponent from "./ProfileAdsCardComponent";
import { AdsContainer } from "./StyledProfileAd";

const Ads = {
  title: "Hostipatl image",
  deviceType: "Anesthesia Machine",
  location: "cairo",
  time: "2 hours",
  price: "1000",
  applicant: "3",
  image: "/hospital1.png",
};
interface AdsListComponentProps {
  $columnsCount?: number;
  filterBy?: string;
}
const ProfileAd = (props: AdsListComponentProps) => {
  const columnsCount = props.$columnsCount ?? 2;
  const filterBy = props.filterBy ?? "Completed";
  return (
    <AdsContainer $columnsCount={columnsCount}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return (
          <AdsCardComponent
            key={item}
            title={Ads.title}
            deviceType={Ads.deviceType}
            location={Ads.location}
            time={Ads.time}
            price={Ads.price}
            applicant={Ads.applicant}
            image={Ads.image}
            filterBy={filterBy}
          />
        );
      })}
    </AdsContainer>
  );
};
export default ProfileAd;
