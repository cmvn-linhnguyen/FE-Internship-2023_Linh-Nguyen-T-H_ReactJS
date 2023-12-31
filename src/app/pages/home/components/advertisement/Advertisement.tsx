import { AdvertisementItem } from './AdvertisementItem';

import { advertisements } from '../../../../../shared/data/data';
import { AdvertisementItemProps } from '../../../../../shared/models/interface';

export const Advertisement = () => {
  return (
    <section className="advertisement-section">
      <div className="container">
        <ul className="row advertisement-list">
          {advertisements.map(
            (advertisement: AdvertisementItemProps, index: number) => (
              <li
                key={index}
                className={`col ${
                  index === 0 ? 'col-6 col-sm-12' : 'col-3 col-sm-6'
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
