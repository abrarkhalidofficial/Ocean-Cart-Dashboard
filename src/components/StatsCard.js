import React from "react";
import Card from "./Card";

export default function StatsCard({ isData, data, heading, infoContent }) {
  return (
    <Card heading={heading} infoContent={infoContent}>
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
