interface AdvertisementItemProps {
  image: string;
  title: string;
  buttonTitle: string;
  discount?: number;
}

const AdvertisementItem = (props: AdvertisementItemProps) => {
  return (
    <div className="advertisement">
      <img
        className="img advertisement-image"
        src={props.image}
        alt="New arrivals"
      />
      <h4 className="advertisement-title">{props.title}</h4>
      <a className="btn advertisement-link" href="/#">
        {props.buttonTitle}
      </a>
      {props.discount && (
        <span className="badge badge-danger advertisement-discount">
          -{props.discount}%
        </span>
      )}
    </div>
  );
};

export default AdvertisementItem;
