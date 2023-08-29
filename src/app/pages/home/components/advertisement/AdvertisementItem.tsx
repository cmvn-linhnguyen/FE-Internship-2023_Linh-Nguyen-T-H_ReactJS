import { AdvertisementItemProps } from '../../../../../shared/models/interface';

export const AdvertisementItem = (props: AdvertisementItemProps) => {
  return (
    <div className="advertisement">
      <img
        className="img advertisement-image"
        src={props.image}
        alt="New arrivals"
      />
      <h4 className="advertisement-title">{props.title}</h4>
      <a className="btn advertisement-link" href="/#">
        {props.buttonLabel}
      </a>
      {props.discount && (
        <span className="badge badge-danger advertisement-discount">
          -{props.discount}%
        </span>
      )}
    </div>
  );
};
