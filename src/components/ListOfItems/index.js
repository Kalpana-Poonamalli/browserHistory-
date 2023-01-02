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
        <img src={logoUrl} alt={title} className="icon" />
        <h1 className="list-heading">{title}</h1>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
        alt="delete"
        className="delete"
        onClick={onDelete}
      />
    </li>
  )
}

export default ListOfItems
