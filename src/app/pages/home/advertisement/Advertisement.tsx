import { advertisements } from '../../../../shared/data/data';
import { AdvertisementItemProps } from '../../../../shared/interface/interface';
import AdvertisementItem from './AdvertisementItem';

const Advertisement = () => {
  return (
    <section className="advertisement-section">
      <div className="container">
        <ul className="row advertisement-list">
          {advertisements.map(
            (advertisement: AdvertisementItemProps, index: number) => (
              <li
                key={index}
                className={`col ${
                  index === 0 ? 'col-6' : 'col-3'
                } advertisement-item`}
              >
                <AdvertisementItem {...advertisement} />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Advertisement;
