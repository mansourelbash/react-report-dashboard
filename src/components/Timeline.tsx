import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

const timelineData = [
  {
    date: "February 2022",
    title: "Application UI code in Tailwind CSS",
    body: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    date: "March 2022",
    title: "Marketing UI design in Figma",
    body: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  },
  {
    date: "April 2022",
    title: "E-Commerce UI code in Tailwind CSS",
    body: "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
  {
    date: "May 2022",
    title: "Launch of the Marketing Dashboard",
    body: "The new marketing dashboard is now live, providing detailed insights into campaign performance, user engagement, and conversion rates.",
  },
  {
    date: "June 2022",
    title: "Final UI Review and Updates",
    body: "Completed the final design review for all UI components and added new updates based on user feedback.",
  },
  {
    date: "July 2022",
    title: "Product Launch Preparation",
    body: "Preparing all materials for the product launch, including creating marketing campaigns, promotional graphics, and landing pages.",
  },
  {
    date: "August 2022",
    title: "Launch of the Product",
    body: "The product is now live! All marketing materials, including ads, landing pages, and email campaigns, are active.",
  },
];

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
            {item.date === "February 2022" && (
              <Button color="gray">
                Learn More
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            )}
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
