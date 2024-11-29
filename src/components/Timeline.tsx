import { Button, Timeline } from "flowbite-react";
import { timelineData } from "../data/dummyData";

export function TimelineComponent() {
  return (
    <Timeline>
      {timelineData.map((item, index) => (
        <Timeline.Item key={index}>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>{item.date}</Timeline.Time>
            <Timeline.Title>{item.title}</Timeline.Title>
            <Timeline.Body>{item.body}</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
