
function Category({categories,selectedCategory,setCategoryFunction}) {
    const handleSelectChange = (event) => {
        setCategoryFunction(event.target.value);
      }; 
  return (
    <div className="category">
    <div className="p-2">category</div>
    <div className="p-2">
      <select className="form-select" value={selectedCategory} aria-label="Default select example" onChange={handleSelectChange}>
        {categories.map((option) => (
          <option key={option.id} value={option.id}>
            {option.category}
          </option>
        ))}
      </select>
    </div>
  </div>
  )
}
export default Category