import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/Activity.module.css';
import { useTranslation } from 'react-i18next';
import pic1 from '../../../img/pexels-vanessa-loring-7868839.jpg';
import pic2 from '../../../img/pexels-vanessa-loring-7869034 (1).jpg';
import pic3 from '../../../img/pexels-ron-lach-9783360 (1).jpg';
import pic4 from '../../../img/pexels-vanessa-loring-7869134 (1).jpg';
function IndividualIntervalsExample() {
  const { t } = useTranslation();

  return (
    <Carousel style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <Carousel.Item interval={2500}>
        <img style={{ borderRadius: '10px', transition: 'transform 0.5s ease' }} src={pic1} alt="First slide" className="d-block w-100" />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>{t('focusedFuture')}</h3>
          <p>{t('focusedFuturePara')}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2500}>
        <img style={{ borderRadius: '10px', transition: 'transform 0.5s ease' }} src={pic2} alt="Second slide" className="d-block w-100" />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>{t('handsOnRobotics')}</h3>
          <p>{t('handsOnRoboticsPara')}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2500}>
        <img style={{ borderRadius: '10px', transition: 'transform 0.5s ease' }} src={pic3} alt="Third slide" className="d-block w-100" />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>{t('exploringDigitalWorld')}</h3>
          <p>{t('exploringDigitalWorldPara')}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2500}>
        <img style={{ borderRadius: '10px', transition: 'transform 0.5s ease' }} src={pic4} alt="Fourth slide" className="d-block w-100" />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>{t('collaborativeLearning')}</h3>
          <p>{t('collaborativeLearningPara')}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
