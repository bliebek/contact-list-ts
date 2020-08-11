import React, { SyntheticEvent } from "react";
import './info.css';

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
  const onItemClick = (e:SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (typeof onClick === 'function') {
          onClick(data.id);
      }
  };

  return (
    <div
      className={`person-info ${data.selected ? 'selected' : ''}`}
      onClick={onItemClick}
    >
      <div className="firstNameLastName">{data.firstNameLastName}</div>
      <div className="jobTitle">{data.jobTitle}</div>
      <div className="emailAddress">{data.emailAddress}</div>
    </div>
  );
}

export default PersonInfo;
