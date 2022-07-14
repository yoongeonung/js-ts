import React from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

function App() {
    const onDragEnd = () => {};
    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd} >
                <Droppable droppableId={'one'} >
                    {(provided) => {
                        return <ul ref={provided.innerRef} {...provided.droppableProps}>
                            <Draggable draggableId={'second'} index={1} >
                                {(provided)=> <li {...provided.draggableProps} ref={provided.innerRef}>
                                    <span {...provided.dragHandleProps}>🔥</span>
                                </li>}
                            </Draggable>
                        </ul>
                    }}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default App;
