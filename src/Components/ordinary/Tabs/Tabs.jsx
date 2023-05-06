import React, {
  memo,
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  startTransition,
} from "react";
import Tab from "./TabComponent";
import "./Tabs.scss";

const Tabs = memo(({ tabs, className = "" }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const slideRef = useRef(null);

  const handleTabClick = useCallback((index) => {
    startTransition(() => {
      setActiveTab(index);
    });
  }, []);

  useLayoutEffect(() => {
    const activeTabRef = tabRefs.current[activeTab];
    slideRef.current.style.left = `${activeTabRef.offsetLeft}px`;
    slideRef.current.style.width = `${activeTabRef.offsetWidth}px`;
  }, [activeTab]);

  return (
    <>
      <div className={`tabs__tabcontainer ${className}`}>
        <ul className="tabs__navigation">
          {tabs.map(({ name }, index) => (
            <Tab
              key={index}
              isActive={activeTab === index}
              onClick={() => handleTabClick(index)}
              ref={(el) => (tabRefs.current[index] = el)}>
              {name}
            </Tab>
          ))}
        </ul>
        <div ref={slideRef} className="slide"></div>
      </div>
      <div className="tabs__content">
        {tabs.map(({ content }, index) =>
          activeTab === index ? <div key={index}>{content}</div> : null
        )}
      </div>
    </>
  );
});

export default Tabs;
