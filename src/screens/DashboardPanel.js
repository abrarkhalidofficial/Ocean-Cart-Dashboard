import React from "react";
import "./DashboardPanel.scss";
import Card from "../components/Card";
import LineChart from "../components/LineChart";
import SpineChart from "../components/SpineChart";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import UserPic from "../assets/userPic.png";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const MessagePanelRow = () => {
  return (
    <Nav.Link
      to="/dashboard/messages"
      as={Link}
      className="message__panel__small__row"
    >
      <div className="message__panel__samll__content">
        <img
          src={UserPic}
          alt="user-pic"
          className="message__panel__small__row__img"
        />
        <div className="messenger__name" style={{ fontWeight: "800" }}>
          Francesca Metts
        </div>
      </div>
      <div className="messenger__name">3 Days Ago</div>
    </Nav.Link>
  );
};

function StatsCard({ isData, data }) {
  return (
    <Card
      heading="Lorem"
      infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
    >
      {isData ? (
        <div className="panel__card__content__statistics">{data}</div>
      ) : (
        <div className="panel__card__content__statistics__null">
          Nothing Here
        </div>
      )}
    </Card>
  );
}
export default class DashboardPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer__empty">
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Placed to Prepared:"
            headingTimeStamp="0 days, 9 Hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="9"
          />
          <Card
            heading=" Prepared To Merchant Departure:"
            headingTimeStamp=" 1 day, 13 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="37 hours"
          />
          <Card
            heading="Merchant Departure to USA Consolidation:"
            headingTimeStamp=" 1 day, 13 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="59 hours"
          />
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="USA Consolidation Arrival To Departure: "
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="59 hours"
          />
          <Card
            heading="USA Consolidation Arrival To Departure:"
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="54 hours"
          />
          <Card
            heading="USA Consolidation Arrival To Departure:"
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="54 hours"
          />
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="USA Consolidation Arrival To Departure:"
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="54 hours"
          />
          <Card
            heading="USA Consolidation Arrival To Departure:"
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="54 hours"
          />
          <div style={{ opacity: 0, width: "33%" }}></div>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
          >
            <div className="panel__card__content__notes">
              DB item:
              <span>#OI-23434</span>
            </div>
            <div className="panel__card__content__notes">
              DB item:
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                illum beatae vero fugiat, sapiente omnis atque optio odio quasi
                id recusandae excepturi ea accusamus, sunt amet explicabo
                quisquam velit? Dignissimos?
              </span>
            </div>
            <div className="panel__card__content__notes">
              DB item:
              <span>#OI-23434</span>
            </div>
            <div className="panel__card__content__notes">
              DB item:
              <a href="https://www.google.com/">https://www.google.com/</a>
            </div>
          </Card>
          <div className="panel__conatainer__empty__row__col">
            <div className="panel__conatainer__empty__row">
              <StatsCard isData={true} data="lorem" />
              <StatsCard isData={true} />
              <StatsCard isData={true} />
            </div>
            <div className="panel__conatainer__empty__row">
              <StatsCard isData={true} data="lorem" />
              <StatsCard isData={false} />
              <StatsCard isData={true} />
            </div>
            <div className="panel__conatainer__empty__row">
              <StatsCard isData={true} data="lorem" />
              <StatsCard
                isData={true}
                data={
                  <a href="https://www.google.com/">https://www.google.com/</a>
                }
              />
              <StatsCard isData={true} />
            </div>
          </div>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,795"
            contentInfo="25 April 2019"
          >
            <LineChart />
          </Card>
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,795"
            contentInfo="25 April 2019"
          >
            <SpineChart />
          </Card>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,345"
            contentInfo="25 April 2019"
          >
            <BarChart />
          </Card>
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,795"
            contentInfo="25 April 2019"
          >
            <DoughnutChart />
          </Card>
        </div>
      </div>
    );
  }
}
