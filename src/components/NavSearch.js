import React, { Component } from 'react'
 class NavSearch extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-header">
                    <div className="site-name">My favorite Neighborhood</div>
                    <div className=" navbar-side" role="search">
                        <div className="form-group">
                            <input className="form-control" id="search-input" type="text"  placeholder="Filter" />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
 export default NavSearch;