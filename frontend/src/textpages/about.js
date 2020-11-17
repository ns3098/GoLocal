import React from 'react';
import "./About.scss";

import { Trans, useTranslation } from 'react-i18next';



const AboutPage = () => {
  const [t] = useTranslation('about');
  return (
    <div className="About">
      <div className="container">
        <Trans i18nKey="content" t={t}>
          <h1>About</h1>
          <h2>What is GoLocal?</h2>
          <p>GoLocal is an online marketplace that enables local retailers to easily
            offer their products online and thereby help to overcome the corona
            crisis.</p>
          <p>A team of experts will support you with the preparations for your
            account, so that it is as easy as possible for you to bring your
            business
            online</p>
          <h2>Who are GoLocal?</h2>
          <p>GoLocal started as an initiative by students from BU.
            Seeing shops in their area having to close due to Covid-19 motivated
            them
            to start the online marketplace
            and help particularly those local shops stay connected with their
            customers and continue their business.</p>

          <p>We, the GoLocal Team, are happy that you found your way to this
            platform
            and are interested in the project. Feel free to reach out to us! </p>
        </Trans>
      </div>

    </div>
  )
}

export default <AboutPage />;
