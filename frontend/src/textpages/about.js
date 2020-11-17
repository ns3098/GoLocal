import React from 'react';
import "./About.scss";

import naomi from '../assets/team/naomi.png';
import fabian_katz from '../assets/team/fabian_katz.png';
import moritz from '../assets/team/moritz.png';
import marco from '../assets/team/marco.png';
import nicolai from '../assets/team/nicolai.png';
import fabian from '../assets/team/fabian.png';
import lea from '../assets/team/lea.png';
import silvia from '../assets/team/silvia.png';
import lisa from '../assets/team/lisa.png';
import laura from '../assets/team/laura.png';
import volker from '../assets/team/volker.png';
import nico from '../assets/team/nico.png';
import balint from '../assets/team/balint.png';
import ines from '../assets/team/ines.png';
import philipp from '../assets/team/philipp.png';
import david from '../assets/team/david.png';
import akolade from '../assets/team/akolade.png';
import chiara from '../assets/team/chiara.png';
import thomas from '../assets/team/thomas.png';
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
