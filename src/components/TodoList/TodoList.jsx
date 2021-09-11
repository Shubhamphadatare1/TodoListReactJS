import { useEffect, useState } from "react";
import Button from "../Button/Button"
import InputText from "../input/InputText"
import List from "../List/List"

const TodoList= () =>{

    const [inputTextVal,setInputTextVal] = useState('');
    const [todoList,setTodoList] = useState([]);


    useEffect(()=>{
        const localTodoList = localStorage.getItem('todoList');
        if(localTodoList){
            const todoList = JSON.parse(localTodoList);
            setTodoList(todoList);
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('todoList',JSON.stringify(todoList))
    },[todoList]);

    const inputTextChangeHandler = (event)=>{
        const textValue = event.target.value;
        setInputTextVal(textValue);
    };

    const buttonClickHandler = ()=>{
        if(inputTextVal.trim()){
            const list = [...todoList];
            const listItems = {
                item:inputTextVal,
                itemEditText:inputTextVal,
                isDone:false,
                isEdit:false,
            
            }
            list.push(listItems);
            setInputTextVal('');
            setTodoList(list);
        }else{
            setInputTextVal('');
        }
    };

    const inputKeyUpHandler = (event)=>{
        if(event.which === 13){
            buttonClickHandler();
        }
    };

    const isDoneHandler = (listIndex)=>{
        const list = [...todoList];
        list[listIndex].isDone = true;
        setTodoList(list);
    };

    const deleteHandler = (listIndex)=>{
        const list = [...todoList];
        list.splice(listIndex,1);
        setTodoList(list);
    };

    const swapListItemHandler =(initialIndex, finalIndex) =>{
        const list = [...todoList];
        const temp = list[initialIndex];
        list[initialIndex] = list[finalIndex];
        list[finalIndex] = temp;
        setTodoList(list);
    };

    const listItemEditHandler = (listIndex)=>{
        const list = [...todoList];
        list[listIndex].isEdit = true;
        setTodoList(list);
    };

    const listItemEditSubmitHandler = (listIndex)=>{
        const list = [...todoList];
        list[listIndex].item = list[listIndex].itemEditText;
        list[listIndex].isEdit = false;
        setTodoList(list);
    };

    const editChangeHandler = (listIndex,editValue)=>{
        const list = [...todoList];
        list[listIndex].itemEditText = editValue;
        setTodoList(list);
    };

    const editCancelHandler = (listIndex)=>{
        const list = [...todoList];
        list[listIndex].itemEditText = list[listIndex].item;
        list[listIndex].isEdit = false;
        setTodoList(list);
    };

return(
        <>
        <InputText
            onInputTextChange={inputTextChangeHandler}
            onKeyUpInput={inputKeyUpHandler}
            value={inputTextVal}/>
        <Button 
            buttonText="Add into the List"
            onButtonClick={buttonClickHandler}/>
        <List 
            todoList={todoList}
            onClickDone={isDoneHandler}
            onClickDelete={deleteHandler}
            swapListItem={swapListItemHandler}
            onEditClick={listItemEditHandler}
            onEditSubmitClick={listItemEditSubmitHandler}
            onEditCancel={editCancelHandler}
            onChangeEdit={editChangeHandler}
            />
        </>
    );
};

export default TodoList;