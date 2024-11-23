import React from 'react';
import { useInView } from 'react-intersection-observer';
import CommCardImg from '../assets/Lady.webp';

// Custom hook for counting animation
const useCountUp = (start, end, duration, trigger) => {
  const [count, setCount] = React.useState(start);

  React.useEffect(() => {
    if (!trigger) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.round(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration, trigger]);

  return count;
};

const CommunityCard = () => {
  const articles = [
    {
      count: 33,
      unit: '%',
      title: 'FAMILIES',
      text: '1 in 3 families go into debt to maintain communication with their loved ones.',
    },
    {
      count: 83,
      unit: '%',
      title: 'WOMEN',
      text: '83% of those covering incarceration-related costs are women.',
    },
    {
      count: 3_000_000_000,
      unit: 'B',
      title: 'SPENT',
      text: 'Annually families spend $3 billion on commissary accounts and phone calls.',
    },
  ];

  return (
    <div className="card-container">
      <div data-aos="fade-up"
          data-aos-duration="1000" className="comm-card-container section">
        <div>
          <div className="comm-card-img">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={CommCardImg}
              alt="card-img"
            />
          </div>
          <div className="comm-card-content card-content">
            <h4
              data-aos="fade-up"
              data-aos-duration="1000"
              className="card-h4"
            >
              Parish Community Card
            </h4>
            <p data-aos="fade-up" data-aos-duration="1000">
              A secured credit card designed to help the families and friends of incarcerated
              individuals build credit by leveraging recurring commissary and telecommunication
              payments.
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
  const animatedCount = useCountUp(0, count, 2000, inView); // Count up animation.

  return (
    <article data-aos="fade-up" data-aos-duration="1000" ref={ref}>
      <h5>
        {inView
          ? `${Math.round(
              animatedCount / (unit === 'M' ? 1_000_000 : unit === 'B' ? 1_000_000_000 : 1)
            )}${unit}`
          : `0${unit}`}
      </h5>
      <h6>{title}</h6>
      <p>{text}</p>
    </article>
  );
};

export default CommunityCard;
