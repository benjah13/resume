import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { carreer } from '../../constants/carreer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import { Img } from './CarreerStyles';

const Carreer = () => (
  <Section nopadding id="carreer">
    <SectionDivider />
    <SectionTitle main>Carrière</SectionTitle>
    <VerticalTimeline>
    {
      carreer.map((carreerItem, key) => {
        return <VerticalTimelineElement
        contentStyle={{ background: carreerItem.color, color: '#fff' }}
        contentArrowStyle={{ borderRight: `7px solid  ${carreerItem.color}` }}
        key={key}
        date={carreerItem.date}
        iconStyle={{ background: carreerItem.color, color: '#fff' }}
        icon={ <WorkIcon/>}
      > 
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h3 className="vertical-timeline-element-title">{carreerItem.title}</h3>
            <br/><h4 className="vertical-timeline-element-subtitle">{carreerItem.location}</h4>
          </div>
          <Img style= {{ width: '80px', height: '80px'}} src={carreerItem.logo}/>
        </div>
        <p>
        {carreerItem.description}
        </p>
        <ul>
          {carreerItem.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </VerticalTimelineElement>;
      })
    }
  
</VerticalTimeline>
  </Section>
);

export default Carreer;