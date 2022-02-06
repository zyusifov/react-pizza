import React from 'react'

// class Categories extends React.Component {
//     state = {
//         activeItem: null,
//     }

//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index,
//         });
//     }

//     render() {
//         const { items, onClick } = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     <li className="active">Все</li>
//                     {
//                         items.map(
//                             (item, index) => <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${item}_${index}`}>{item}</li>
//                         )
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

function Categories({ activeCategory, items, onClick }) {

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClick(null)}>Все</li>
                {items && items.map(
                    (item, index) => <li className={activeCategory === index ? 'active' : ''} onClick={() => onClick(index)} key={`${item}_${index}`}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default Categories
