import './index.css'

const ListOfItems = props => {
  const {eachItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="container">
      <div className="list-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="icon" />
        <p className="list-heading">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button className="delete" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          onClick={onDelete}
        />
      </button>
    </li>
  )
}

export default ListOfItems
