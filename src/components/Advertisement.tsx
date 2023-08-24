import AdvertisementItem from './AdvertisementItem';
import advertisements1 from '../assets/images/advertisements1.png';
import advertisements2 from '../assets/images/advertisements2.png';
import advertisements3 from '../assets/images/advertisements3.png';

const advertisements = [
  {
    image: advertisements1,
    title: 'New arrivalsare now in!',
    buttonTitle: 'SHOW COLLECTION',
  },
  {
    image: advertisements2,
    title: 'Basic t-shirts',
    buttonTitle: 'MORE DETAILS',
  },
  {
    image: advertisements3,
    title: 'Sale this summer',
    buttonTitle: 'MORE DETAILS',
    discount: 50,
  },
];

const Advertisement = () => {
  return (
    <section className="advertisement-section">
      <div className="container">
        <ul className="row advertisement-list">
          <li className="col col-6 advertisement-item">
            <AdvertisementItem {...advertisements[0]} />
          </li>
          <li className="col col-3 advertisement-item">
            <AdvertisementItem {...advertisements[1]} />
          </li>
          <li className="col col-3 advertisement-item">
            <AdvertisementItem {...advertisements[2]} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advertisement;
