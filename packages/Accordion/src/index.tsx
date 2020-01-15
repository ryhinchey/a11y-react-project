// https://www.w3.org/TR/wai-aria-practices/#accordion

import React, { useState, ComponentType } from "react";

interface AccordionComponent {
  Header: ComponentType;
  Panel: ComponentType;
}

interface AccordionItemProps {
  Component: ComponentType;
  isExpanded: boolean;
}

interface AccordionProps {
  components: AccordionComponent[];
  header: string;
}

interface AccordionHeaderProps extends AccordionItemProps {
  setIsExpanded: Function;
}

const AccordionHeader = (props: AccordionHeaderProps) => {
  const { Component, isExpanded, setIsExpanded } = props;

  return (
    <button onClick={() => setIsExpanded(!isExpanded)}>
      <Component />
    </button>
  );
};

const AccordionPanel = ({ Component, isExpanded }: AccordionItemProps) => {
  if (!isExpanded) {
    return null;
  }

  return <Component />;
};

const AccordionItem = ({ component }: { component: AccordionComponent }) => {
  const { Header, Panel } = component;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <AccordionHeader
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        Component={Header}
      />
      <AccordionPanel isExpanded={isExpanded} Component={Panel} />
    </div>
  );
};

const Accordion = ({ components = [], header = "" }: AccordionProps) => {
  return (
    <div>
      {header}
      {components.map(component => (
        <AccordionItem component={component} />
      ))}
    </div>
  );
};

export default Accordion;
