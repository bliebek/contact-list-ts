import React from "react";

type Props = {
  data: {
    firstNameLastName: string,
    jobTitle: string,
    emailAddress: string,
    selected?: boolean,
    id: string
  },
  onClick: Function
};

function PersonInfo(props: Props) {
  const { data, onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        height: "100px",
        justifyContent: "center",
        flexDirection: "column",
        padding: "32px",
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
        margin: "10px 0",
        background: "#fff",
        cursor: "pointer",
      }}
      className={`person-info ${data.selected ? 'selected' : ''}`}
      onClick={() => onClick(data.id)}
    >
      <div className="firstNameLastName">{data.firstNameLastName}</div>
      <div className="jobTitle">{data.jobTitle}</div>
      <div className="emailAddress">{data.emailAddress}</div>
    </div>
  );
}

export default PersonInfo;
