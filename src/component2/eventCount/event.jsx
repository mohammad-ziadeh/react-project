import React, { useState, useEffect } from 'react';
import './event.css';
import { useTranslation } from 'react-i18next';
function Backschool() {
  const { t } = useTranslation();
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const startTimer = () => {
    const countDownDate = new Date('February 29, 2025').getTime();

    let interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const day = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(day);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <>
      <div className="card21">
        <div className="card-content">
          <br />
          <h1 className="p1">{t('29 February 2025')}</h1>
          <h1 className="p1">{t('EventH1')}</h1>
          <br />
          <p className="p2">{t('EventPara')}</p>
          {/* <button>{t('View Event')}</button> */}
          <br />
          <br />
          <div className="timer">
            <p className="num">
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{timerDays}</span>
              <br />
              <span>Days</span>
            </p>
            <p className="num">
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{timerHours}</span>
              <br />
              <span>Hrs</span>
            </p>
            <p className="num">
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{timerMinutes}</span>
              <br />
              <span>Mins</span>
            </p>
            <p className="num">
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{timerSeconds}</span>
              <br />
              <span>Secs</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Backschool;
