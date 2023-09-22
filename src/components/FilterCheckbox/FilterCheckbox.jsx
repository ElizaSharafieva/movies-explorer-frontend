import './FilterCheckbox.css';

function FilterCheckbox() {
    return(
      <div className='checkbox'>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        <h1 className='checkbox__title'>Короткометражки</h1>
      </div>
    );
}

export default FilterCheckbox;
