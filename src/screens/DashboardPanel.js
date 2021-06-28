import React from "react";
import "./DashboardPanel.scss";
import Card from "../components/Card";
import LineChart from "../components/LineChart";
import SpineChart from "../components/SpineChart";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import Bot from "../components/Bot";
import StatsCard from "../components/StatsCard";
export default class DashboardPanel extends React.Component {
  render() {
    return (
      <>
        <Bot />
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
              heading="Note"
              infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            >
              <div className="panel__card__content__notes">
                DB item:
                <span>#OI-23434</span>
              </div>
              <div className="panel__card__content__notes">
                Issue:
                <span>#3434935</span>
              </div>
              <div className="panel__card__content__notes">
                Delay in order:
                <span>
                  2 days Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Atque id veniam delectus fugit aliquam quis impedit
                  sapiente quas consequatur eligendi cum facere est sit eveniet
                  adipisci corrupti consequuntur, velit repellendus?
                </span>
              </div>
              <div className="panel__card__content__notes">
                Amount / Method:
                <span>
                  $50 / Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore adipisci possimus consequatur corrupti, mollitia
                  illo voluptas. Laborum quaerat natus dolorem.
                </span>
              </div>
              <div className="panel__card__content__notes">
                DB item:
                <a href="https://www.google.com/">https://www.google.com/</a>
              </div>
              <div className="panel__card__content__notes">
                CC:
                <span>lorem ipsm</span>
              </div>
            </Card>
            <div className="panel__conatainer__empty__row__col">
              <div className="panel__conatainer__empty__row">
                <StatsCard
                  isData={true}
                  data="Priority"
                  heading="Tickets"
                  infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                />
                <StatsCard
                  isData={false}
                  heading="Unpaired Items"
                  infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                  data="Unpaired Items"
                />
                <StatsCard
                  isData={true}
                  heading="Preparation API"
                  infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                  data={
                    <>
                      <div>
                        <span style={{ fontWeight: "bold" }}>87.1% </span>orders
                        are prepared in last 24 hours
                      </div>
                      <div>Average hours: 11.74</div>
                    </>
                  }
                />
              </div>
              <div className="panel__conatainer__empty__row">
                <StatsCard
                  isData={false}
                  heading="Damaged"
                  infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                  data="lorem"
                />
                <StatsCard
                  isData={true}
                  heading="Processing Items"
                  infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                  data="187 items to approve"
                />
                <StatsCard
                  isData={true}
                  heading="Manual Processing Required"
                  infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                  data={
                    <a href="https://www.google.com/">
                      187 orders need manualordering
                    </a>
                  }
                />
              </div>
              <div className="panel__conatainer__empty__row">
                <StatsCard
                  isData={false}
                  heading="Unshipped Orders"
                  infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                  data="lorem"
                />
                <StatsCard
                  isData={false}
                  heading="Delayed Courier Deliveries"
                  infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                  data="187 items to approve"
                />
                <StatsCard
                  isData={true}
                  heading="Requires Matching"
                  infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                  data={
                    <a href="https://www.google.com/">1298 requires matching</a>
                  }
                />
              </div>
              <div className="panel__conatainer__empty__row">
                <StatsCard
                  isData={true}
                  heading="Cancelled Orders By Seller"
                  infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                  data="187 items to approve"
                />
                <div style={{ opacity: 0, width: "33%" }}></div>
                <div style={{ opacity: 0, width: "33%" }}></div>
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
      </>
    );
  }
}
