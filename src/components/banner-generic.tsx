import * as React from 'react';

interface BannerProps {
  className: string;
  subtitle: string;
  title: string;
}

const BannerGeneric = (props: BannerProps) => {
  return (
    <section className={`banner ${props.className}`}>
      <div className="inner">
        <header className="major">
          <h1>{props.title}</h1>
        </header>
        <div className="content">
          <p>{props.subtitle}</p>
        </div>
      </div>
    </section>
  );
}

export default BannerGeneric;
