import Button from '../Button/Button';
import InputText from '../input/InputText';
import styles from '../List/List.module.css';
const List=(props) => {

const listMaxIndex = props.todoList.length -1;

    const listItems = props.todoList.map((listItem,index)=>
    (<li key={index}
        className="list-group-item list-group-item-dark ">

        {listItem.isEdit && (
            <>
                <InputText 
                    value={listItem.itemEditText}
                    onInputTextChange={(event)=>{
                        const editValue = event.target.value;
                        props.onChangeEdit(index,editValue)}
                        }/>
                <Button 
                    onButtonClick={()=>{props.onEditSubmitClick(index)}}
                    buttonText="Submit" />
                <Button 
                    onButtonClick={()=>{props.onEditCancel(index)}}
                    buttonText="Cancel" />
            </>
        )}

        {!listItem.isEdit && (
            <>
        <span>
            {listItem.item}
        </span>

        {!listItem.isDone && (
        <button className= {styles.Edit}
            onClick= {()=>{props.onEditClick(index)}}>
            Edit
        </button>
        )}

        {index!==0 && (
            <button className= {styles.UP}
                onClick= {()=>{props.swapListItem(index,index-1)}}>
                UP
            </button>
        )}

        {index!==listMaxIndex && (
            <button className= {styles.DOWN}
                onClick= {()=>{props.swapListItem(index,index+1)}}>
                DOWN
            </button>
        )}


        {!listItem.isDone && (
        <button className= {styles.Done}
            onClick={()=>{props.onClickDone(index)}}>
            Done
        </button>
        )}
        
        {listItem.isDone && (
        <button className= {styles.Delete}
            onClick={()=>{props.onClickDelete(index)}}>
            Delete
        </button>
        )}
        </>
        )}
    </li>));
        
    
    return <ol>{listItems}</ol>;
};

export default List;