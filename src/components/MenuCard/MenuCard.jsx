import Image from 'next/image';

const MenuCard = ({ id, title, description, image, price }) => {
    return (
        <li className="item item--vegan">

            <Image
                src={image}
                className='item-img'
                alt="Image"
                priority
                width={90} height={72}
            />

            <div className="item-desc">
                <div className="item-header">
                    <h3 className="item-title">{title}</h3>
                    <div className="item-price">{price}</div>
                </div>
                <p className="item-text">
                    {description}
                </p>
            </div>
        </li>
    );
};

export default MenuCard;
