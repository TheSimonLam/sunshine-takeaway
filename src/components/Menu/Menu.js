import React, {Component} from "react";
import './Menu.css';
import menu from './menu.json';

class Menu extends Component {
    render() {
        let menuList = menu.map(function(menuCategory, i){
            let itemList = menuCategory.item.map(function(item, x){
                return <div className="menu-column" key={x}>
                    <div className="menu-column">{item.name}</div>
                    <div className="menu-column">{item.price}</div>
                </div>;
            });
            return <div className="menu-column" key={i}>
                        <h2>{menuCategory.name}</h2>
                        {itemList}
                    </div>;
        });

        return (
            <div className='menu-section'>
                <h1 className='menu-title'>Menu</h1>
                <div className='middle-section'>
                    <div className="menu-row">
                        { menuList }
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
