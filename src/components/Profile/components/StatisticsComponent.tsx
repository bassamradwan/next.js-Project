import {
  StatisticsWrapper,
  StatisticsSection,
  StatisticsTitle,
  ControlPanelCards,
  ControlPanelCard,
  ControlCardLine,
  ControlCardLineTitle,
  ControlCardIcon,
} from "../styles/styled.Statistics";
import { Content } from "@/Styles/styled.general";
import VisitsChartComponent from "./SubComponents/VisitsChartComponent";
const data = [
  {
    title: "Reviews",
    icon: "/reviewstar.svg",
    count: 5,
  },
  {
    title: "pending",
    icon: "/pending.svg",
    count: 9,
  },
  {
    title: "Jobs",
    icon: "/check-circle.svg",
    count: 0,
  },
];

const StatisticsComponent = () => {
  return (
    <Content>
      <StatisticsWrapper>
        <StatisticsSection>
          <StatisticsTitle>Statistics</StatisticsTitle>
          <ControlPanelCards>
            {data.map(item => (
              <ControlPanelCard key={item.title}>
                <ControlCardLine>
                  <ControlCardLineTitle>{item.title}</ControlCardLineTitle>
                  <ControlCardIcon src={item.icon} />
                </ControlCardLine>
                <ControlCardLine>
                  <ControlCardLineTitle>{item.count}</ControlCardLineTitle>
                </ControlCardLine>
              </ControlPanelCard>
            ))}
          </ControlPanelCards>
        </StatisticsSection>
        <StatisticsSection>
          <StatisticsTitle>Visits</StatisticsTitle>
          <VisitsChartComponent />
        </StatisticsSection>
      </StatisticsWrapper>
    </Content>
  );
};
export default StatisticsComponent;
