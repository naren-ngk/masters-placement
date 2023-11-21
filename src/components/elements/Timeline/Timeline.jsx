import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { timelineCards } from '../../../constants';

import "react-vertical-timeline-component/style.min.css";
import styles from './Timeline.module.css';

const WorkIcon = () => <></>;

function Timeline() {
    return (
        <div className={styles.container}>
            <VerticalTimeline lineColor='#9c89b8'>
                {timelineCards.map((card, index) => (
                    <VerticalTimelineElement key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#c8b6ff", color: "#fff", }}
                        contentArrowStyle={{ borderRight: "7px solid  #c8b6ff" }}
                        iconStyle={{ background: "#c8b6ff", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{card.title}</h3>
                        <p>{card.content}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;