import React from 'react'
import { Categories, PizzaLoadingBlock, SortPopup } from '../components';
import PizzaCard from '../components/PizzaCard';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas';


const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
]

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const filters = useSelector(({ filter }) => filter);
    const cartItems = useSelector(({ cart }) => cart.items);


    const handleAddPizza = obj => {
        dispatch({
            type: "ADD_PIZZA_CART",
            payload: obj,
        })
    }

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    const onClickSortType = React.useCallback((name) => {
        dispatch(setSortBy(name))
    }, []);

    React.useEffect(() => {
        dispatch(fetchPizzas(filters.category, filters.sortBy))
    }, [filters.category, filters.sortBy]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={filters.category} onClick={onSelectCategory} items={categoryNames} />
                <SortPopup activeSortType={filters.sortBy}
                    items={sortItems}
                    onClickSortType={onClickSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) =>
                        <PizzaCard
                            onAddPizza={handleAddPizza}
                            key={obj.id}
                            isLoaded={true}
                            {...obj}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        />)
                    : Array(4).fill(0).map((_, index) =>
                        <PizzaLoadingBlock key={index} />
                    )}
            </div>
        </div>
    )
}

export default Home
