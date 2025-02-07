import React from 'react';
import './about.css';
import { TbHorseToy } from 'react-icons/tb';
import { IoIosHome } from 'react-icons/io';
import { GiNotebook } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import 'animate.css/animate.compat.css';
import ScrollAnimation from 'react-animate-on-scroll';
import pic from '../../img/about2.png.webp';
function About() {
  const { t } = useTranslation();
  return (
    <div className="container" style={{ fontFamily: 'Nunito' }}>
      <h1>
        <span style={{ color: '#ed128f', fontFamily: 'Nunito' }}>{t('S')}</span>
        {t('hining')} <span style={{ color: '#fbd010', fontFamily: 'Nunito' }}>{t('Ss')}</span>
        {t('tars')} <span style={{ color: '#12d9df', fontFamily: 'Nunito' }}>{t('A')}</span>
        {t('cademy')}
      </h1>
      <p className="headerDis">{t('description')}</p>

      <div className="grid">
        <div className="flex2">
          <ul>
            <li className="one">
              <h2>
                <ScrollAnimation animateIn="fadeIn">
                  <IoIosHome
                    style={{
                      color: 'white',
                      backgroundColor: '#2a92ca',
                      borderRadius: '50px',
                      width: '80px',
                      height: '80px'
                    }}
                  />
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInRight" animateOnce={true} duration={1} initiallyVisible={false}>
                  {' '}
                  {t('friendlyEnv')}
                </ScrollAnimation>
              </h2>

              <p className="paragraph">
                <ScrollAnimation animateIn="slideInRight" animateOnce={true} duration={1.5} initiallyVisible={false}>
                  {t('friendlyEnvPara')}
                </ScrollAnimation>
              </p>
            </li>
            <li className="tow">
              <h2>
                <ScrollAnimation animateIn="fadeIn">
                  <TbHorseToy
                    style={{
                      color: 'white',
                      backgroundColor: '#fbcc1b',
                      borderRadius: '50px',
                      width: '80px',
                      height: '80px'
                    }}
                  />
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInRight" animateOnce={true} duration={1} initiallyVisible={false}>
                  {t('EduToys')}
                </ScrollAnimation>
              </h2>
              <p className="paragraph">
                <ScrollAnimation animateIn="slideInRight" animateOnce={true} duration={1.5} initiallyVisible={false}>
                  {t('EduToysPara')}
                </ScrollAnimation>
              </p>{' '}
            </li>
            <li className="three">
              <h2>
                <ScrollAnimation animateIn="fadeIn">
                  <GiNotebook
                    style={{
                      color: 'white',
                      backgroundColor: '#14dad6',
                      borderRadius: '50px',
                      width: '80px',
                      height: '80px'
                    }}
                  />
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInRight" animateOnce={true} duration={1} initiallyVisible={false}>
                  {' '}
                  {t('EduAct')}
                </ScrollAnimation>
              </h2>
              <p className="paragraph">
                <ScrollAnimation animateIn="slideInRight" animateOnce={true} duration={1.5} initiallyVisible={false}>
                  {t('EduActPara')}
                </ScrollAnimation>
              </p>{' '}
            </li>
          </ul>
        </div>
        {/* ............................ */}
        <div>
          <img className="imag" src={pic}></img>
        </div>

        {/* ........................................ */}
      </div>
    </div>
  );
}

export default About;
