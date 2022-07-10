import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"

function App() {
    const onDragEnd = () => {
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId={"one"}>
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            <Draggable draggableId={"first"} index={0}>
                                {(provided) => (
                                    <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>one</li>)}
                            </Draggable>
                            <Draggable draggableId={"second"} index={1}>
                                {(provided) => (
                                    <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>two</li>)}
                            </Draggable>
                        </ul>)}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

export default App;
