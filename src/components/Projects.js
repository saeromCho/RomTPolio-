import React from 'react';
import { isMobile } from 'react-device-detect';

import ProjectItem from './ProjectItem';

import styles from '../res/style/styles.css';
import mobileStyles from '../res/style/mobileStyles.css';

import talkenImage from '../res/images/talken_proj.jpg';
import colligenceImage from '../res/images/colligence_proj.jpg';
import drftsTzImage from '../res/images/drfts_proj.jpg';
import drftsAppImage from '../res/images/drfts_ios_proj.jpg';
import catBoxImage from '../res/images/catBox_proj.jpg';
import juvisImage from '../res/images/juvis_proj.jpg';

class Project extends React.Component {

  render() {
    return (
      <div className={isMobile ? mobileStyles.projectsDiv : styles.projectsDiv}>
        <div className={isMobile ? mobileStyles.projectsTitle : styles.projectsTitle}>
          📑 Projects
        </div>
        <div>
          <ProjectItem
            title={'Talken Project'}
            duration={'2018.07 ~ 2020.01'}
            content={'JavaScript + React + Node.js + Express.js를 이용한 Front-end 개발(Web & Mobile) 및 Java + MariaDB를 이용한 Back-end API 일부 작업'}
            url={'https://talken.io'}
            image={talkenImage}
          />
          <ProjectItem
            title={'Colligence Corp. Site'}
            duration={'2019.02 (Within 1 week)'}
            content={'개발 100%, JavaScript, React를 이용한 Front-end 개발(Web & Mobile)'}
            url={'https://colligence.io'}
            image={colligenceImage}
          />
          <ProjectItem
            title={'Drfts teaser Project'}
            duration={'2018.01 ~ 2018.06'}
            content={'JS + React + Node.js + Express.js를 이용한 Front-end 개발 및 웹서버 구축과 배포'}
            url={'http://tz.drfts.net'}
            image={drftsTzImage}
          />
          <ProjectItem
            title={'AOS 게임 App, 『고양이 상자에는 마법이 담겨있나요?』'}
            duration={'2018.01 ~ 2018.06'}
            content={'Unity3D + C# + Firebase를 이용한 UI, 인게임 화면 개발 및 게임에 필요한 기능 및 Method 구현, Spine Animation Object 적용'}
            url={'https://play.google.com/store/apps/details?id=com.studiomalt.catboxmagic&hl=ko'}
            image={catBoxImage}
          />
          <ProjectItem
            title={'iOS Disconnected SNS App, \'Drfts\' Project'}
            duration={'2018.09 ~ ing'}
            content={'React-Native + React + JavaScript + Firebase를 이용한 SNS iOS App, \'Drfts\' 개발 중'}
            image={drftsAppImage}
          />
          <ProjectItem
            title={'Juvis Diet WebApp Refactoring Project'}
            duration={'2017.10 ~ 2017.12'}
            content={'WebApp 리팩토링 개편 및 Refactoring 작업(UI & 간단한 API 및 메소드), PHP + JavaScript + Slim Framework + MySQL을 이용'}
            image={juvisImage}
          />
        </div>
      </div>
    )
  }
}

export default Project;