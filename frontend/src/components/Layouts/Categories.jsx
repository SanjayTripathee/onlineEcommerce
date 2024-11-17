import bakery from '../../assets/images/Categories/bakery.png';
import candy from '../../assets/images/Categories/candy.png';
import drinks from '../../assets/images/Categories/drinks.png';
import essentials from '../../assets/images/Categories/essentials.png';
import meat from '../../assets/images/Categories/meat.png';
import milk from '../../assets/images/Categories/milk.png';
import snacks from '../../assets/images/Categories/snacks.png';
import vegetables from '../../assets/images/Categories/vegetables.png';
import { Link } from 'react-router-dom';

const catNav = [
    {
        name: "Bakery",
        icon: bakery,
    },
    {
        name: "Candy",
        icon: candy,
    },
    {
        name: "Drinks",
        icon: drinks,
    },
    {
        name: "Essentials",
        icon: essentials,
    },
    {
        name: "Meat",
        icon: meat,
    },
    {
        name: "Milk",
        icon: milk,
    },
    {
        name: "Snacks",
        icon: snacks,
    },
    {
        name: "Veggies",
        icon: vegetables,
    },

]

const Categories = () => {
    return (
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">

            <div className="flex items-center justify-between mt-4">

                {catNav.map((item, i) => (
                    <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-16 w-16">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-green">{item.name}</span>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default Categories;
