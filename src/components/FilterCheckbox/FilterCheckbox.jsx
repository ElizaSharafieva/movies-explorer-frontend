import './FilterCheckbox.css';

function FilterCheckbox(props) {

    return(
      <div className='checkbox'>
        <label className="switch">
          <input type="checkbox" id="checkbox"
            onChange={props.onClickCheckbox} checked={props.isCheckbox || false} ></input>
          <span className="slider round"></span>
        </label>
        <h1 className='checkbox__title'>Короткометражки</h1>
      </div>
    );
}

export default FilterCheckbox;
