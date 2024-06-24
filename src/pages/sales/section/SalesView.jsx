import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { onDragEnd } from "../../../helpers/onDragEnd";
// import { AddOutline } from "react-ionicons";

import Task from "../../../components/Task/index";
import AddModal from "../../../components/modal/AddModal";
import { useSelector } from "react-redux";
import { getAllSalesLead } from "../../../selectors/selectors";
import { useDispatch } from "react-redux";
import { updateSalesLead } from "../../../features/reducer/sales/salesSlice";

const SalesView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  const openModal = (columnId) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { salesLead } = useSelector(getAllSalesLead);

  const dispatch = useDispatch();

  const [columns, setColumns] = useState({});

  const resultFormatted = salesLead?.reduce((acc, column) => {
    const stageName = column?.attributes?.leadStageName?.toLowerCase();
    const stageId = column?.id;
    const itemsWithStringId = column?.attributes?.leadCompanies?.data?.map(
      (item) => ({
        ...item,
        id: item?.id.toString(),
      })
    );
    acc[stageName] = {
      items: itemsWithStringId,
      name: stageName,
      id: stageId,
    };
    return acc;
  }, {});

  useEffect(() => {
    setColumns(resultFormatted);
  }, [salesLead]);

  const handleAddTask = (taskData) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
    setColumns(newBoard);
  };

  const handleDrag = (item, destColumn) => {
    // console.log(item);
    // console.log(destColumn?.id);
    const data = {
      leadStage: `${destColumn?.id}`,
    };

    dispatch(updateSalesLead({ id: item?.id, data }));
  };

  return (
    <div className=" pr-[20px] pt-10  w-full h-full overflow-y-auto">
      {/* ----------------------------------------------Board------------------------------------------------ */}
      {/* <h1 className="text-3xl ml-5 py-5 font-medium">Sales Kanban View</h1> */}
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, columns, setColumns, handleDrag)
        }
      >
        <div
          className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10"
          style={{ gap: "20px" }}
        >
          {Object.entries(columns).map(([columnId, column]) => (
            <div
              className="w-full flex flex-col gap-5"
              key={columnId}
              style={{ background: "#DEEBFF", padding: "10px" }}
            >
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
                  >
                    <div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
                      {column?.name}
                    </div>
                    {column?.items?.map((task, index) => (
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <>
                            <Task provided={provided} task={task} />
                          </>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() => openModal(column?.id)}
                className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
              >
                {/* <AddOutline color={"#555"} /> */}
                Add Lead
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>
      <AddModal
        isOpen={modalOpen}
        onClose={closeModal}
        setOpen={setModalOpen}
        handleAddTask={handleAddTask}
        selectedColumn={selectedColumn}
      />
      {/* ----------------------------------------------Boardends------------------------------------------------ */}
    </div>
  );
};

export default SalesView;
