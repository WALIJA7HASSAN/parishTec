import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import JusticeCardImg from '../assets/Black-Parish.webp';

// Custom hook for counting animation
const useCountUp = (start, end, duration, trigger) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = progress * (end - start) + start;
      setCount(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration, trigger]);

  return count;
};

const JusticeCard = () => {
  const articles = [
    {
      count: 10_000_000,
      unit: 'M',
      title: 'INDIVIDUALS',
      text: 'Owe a collective $50 billion in fees, fines, and charges to the criminal justice system.',
    },
    {
      count: 47,
      unit: '',
      title: 'STATES',
      text: 'Have laws allowing supervision fees, with 38 states requiring monthly fees from $10 to $208.',
    },
    {
      count: 1_200_000_000,
      unit: 'B',
      title: 'SPENT',
      text: 'On electronic monitoring in 2023 alone.',
    },
  ];

  return (
    <div  className="card-container" id='parish-cards'>
      <div data-aos="fade-up"
          data-aos-duration="1000" className="justice-card-container section">
        <h4 className="card-h4 card-h4-sm" data-aos="fade-up" data-aos-duration="1000">
          Parish Justice Card
        </h4>
        <div>
          <div className="justice-card-img">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={JusticeCardImg}
              alt="card-img"
            />
          </div>
          <div className="justice-card-content card-content">
            <h4
              data-aos="fade-up"
              data-aos-duration="1000"
              className="card-h4 card-h4-lg"
            >
              Parish Justice Card
            </h4>
            <p data-aos="fade-up" data-aos-duration="1000">
              A secured credit card that helps justice-impacted individuals build credit by
              leveraging recurring payments for community supervision, electronic monitoring,
              and restitution fees.
            </p>
            <div>
              {articles.map((article, index) => (
                <AnimatedArticle
                  key={index}
                  count={article.count}
                  unit={article.unit}
                  title={article.title}
                  text={article.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedArticle = ({ count, unit, title, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.8,    // Trigger when 80% of the article is visible
  });

  const animatedCount = useCountUp(0, count, 2000, inView); // Animate based on visibility.

  const formattedCount = () => {
    if (unit === 'M') {
      return `${(animatedCount / 1_000_000).toFixed(0)}M`; // Format as millions with one decimal.
    } else if (unit === 'B') {
      return `${(animatedCount / 1_000_000_000).toFixed(1)}B`; // Format as billions with one decimal.
    }
    return Math.floor(animatedCount); // Default for plain numbers.
  };

  return (
    <article data-aos="fade-up" data-aos-duration="1000" ref={ref}>
      <h5>{inView ? formattedCount() : `0${unit}`}</h5>
      <h6>{title}</h6>
      <p>{text}</p>
    </article>
  );
};

export default JusticeCard;
