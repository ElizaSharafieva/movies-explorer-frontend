import './FilterCheckbox.css';

function FilterCheckbox() {
    return(
      <div className='checkbox'>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        <p className='checkbox__title'>Короткометражки</p>
      </div>
    );
}

export default FilterCheckbox;