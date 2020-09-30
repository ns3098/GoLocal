import React from 'react';
import Button from '../components/Button/Button';
import ViewWrappers from "../components/ViewWrappers/ViewWrappers";
import Map from "../components/Map/Map";

import './Home.scss';
import { useTranslation } from 'react-i18next';
import { useUserContext } from '../context/UserContext';
import EnlistModal from '../components/EnlistModal/EnlistModal';

const Home = () => {
  const [t] = useTranslation('home');
  const { partners } = useUserContext();
//  const items = { ...localStorage };
  //var print = JSON.stringify(items);
//  window.alert(print);
  return (
    <ViewWrappers.View>
      <ViewWrappers.ViewSplitter size="sm">
      <EnlistModal/>
        <div className="Home">
          <div className="Intro">
            <h1>{t('Support your favourite shop online')}</h1>
            <p>{t('GoLocal is an online marketplace that enables local retailers to easily offer their products online and thereby help to overcome the corona crisis.')}</p>
          </div>

          <div className="Btn-group">
            <Button to="/stores" label={t('searchButton')}/>
            {!partners.length ?
              <Button to="/stores/new" label={t('registerButton')} secondary/> :
              <Button to={`/stores/${partners[0]}`} label={t('goToMyStore')} secondary/>
            }
          </div>
        </div>
      </ViewWrappers.ViewSplitter>
      <ViewWrappers.ViewSplitter omitOnMobile>
        <Map/>
      </ViewWrappers.ViewSplitter>
    </ViewWrappers.View>
  )
};

export default Home
