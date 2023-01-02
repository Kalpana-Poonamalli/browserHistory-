import {Component} from 'react'
import ListOfItems from '../ListOfItems'
import './index.css'

class Home extends Component {
  state = {searchItem: ''}

  onInputChange = event => {
    console.log(event.target.value)
    this.setState({searchItem: event.target.value})
  }

  render() {
    const {searchItem} = this.state
    const {initialHistoryList} = this.props

    const filteredList = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchItem.toLowerCase()),
    )

    return (
      <div className="home-container">
        <div className="navbar">
          <div className="img-align">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logo"
            />
          </div>

          <div className="input-search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              className="input"
              placeholder="Search History"
              value={searchItem}
              onChange={this.onInputChange}
            />
          </div>
        </div>

        <div className="inner-container">
          <ul>
            {filteredList.map(eachItem => (
              <ListOfItems
                eachItem={eachItem}
                key={eachItem.id}
                deleteItem={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
