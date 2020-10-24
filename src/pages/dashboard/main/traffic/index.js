import React from "react";
import {
  Breadcrumb,
  ContentHeader,
} from "../../../../components/atoms/dashboard";
import Content from "./content";
import { Title } from "../../../../components/atoms/global";

const breadcrumb = [
  {
    name: "Dashboard",
    to: "#",
  },
];

const header = {
  title: "Traffic & Engagement",
  subTitle: "Overview statistic about vehicles",
};

export default function content() {
  return (
    <div className="py-4">
      <Title name="Traffic" />
      <Breadcrumb breadcrumb={breadcrumb} />
      <div className="d-flex justify-content-between w-100 flex-wrap">
        <ContentHeader header={header} />
        {/* <div>
          <a
            href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/components/forms/"
            className="btn btn-outline-gray"
          >
            <i className="far fa-question-circle mr-1"></i> Forms Docs
          </a>
        </div> */}
        <Content />
      </div>
    </div>
  );
}
