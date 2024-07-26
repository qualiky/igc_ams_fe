import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { onDragEnd } from "../../../helpers/onDragEnd";
// import { AddOutline } from "react-ionicons";

import { useSelector } from "react-redux";
import { getAllSalesLead, getProjectStage } from "../../../selectors/selectors";
import { useDispatch } from "react-redux";
import {
  getProjectStages,
  updateProjectStage,
} from "../../../features/reducer/project/projectDetailSlice";
import { useParams } from "react-router-dom";
import TaskProject from "../../../components/Task/indexTask";
import { Icon } from "@iconify/react/dist/iconify.js";
import AddProjectModal from "../../../components/modal/AddProjectTaskModal";

const ProjectViewNew = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  const params = useParams();

  const openModal = (columnId) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { salesLead } = useSelector(getAllSalesLead);
  const projectStages = useSelector(getProjectStage);

  const dispatch = useDispatch();

  const [columns, setColumns] = useState({});

  const resultFormatted = projectStages?.reduce((acc, column) => {
    const stageName = column?.attributes?.projectStageName?.toLowerCase();
    const stageId = column?.id;
    const itemsWithStringId = column?.attributes?.projectTasks?.data?.map(
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

  useEffect(() => {
    dispatch(getProjectStages({ id: params?.id }));
  }, [dispatch, params?.id]);

  const handleAddTask = (taskData) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
    setColumns(newBoard);
  };

  const handleDrag = (item, destColumn) => {
    const data = {
      projectStage: `${destColumn?.id}`,
    };

    dispatch(updateProjectStage({ id: item?.id, data })).then(() => {
      dispatch(getProjectStages({ id: params?.id }));
    });
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
              className="w-full flex flex-col gap-5 rounded  bg-white dark:bg-[#242424]"
              key={columnId}
              style={{ padding: "10px" }}
            >
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
                  >
                    <div className="flex items-center justify-between py-[7px] px-3 w-full bg-[#F1F2F4] dark:bg-[#1E1E1E] dark:text-white  rounded border border-stone-200 uppercase font-semibold tracking-wider text-[15px]">
                      <p className="text-black dark:text-white">
                        {column?.name}
                      </p>
                      <div className="w-10 h-10 relative inline-block text-center leading-[2.5rem] bg-primary-light rounded-full">
                        <h5 className="inline-block text-primary totalCount">
                          {column?.items?.length}
                        </h5>
                      </div>
                    </div>
                    {column?.items?.map((task, index) => (
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <>
                            <TaskProject provided={provided} task={task} />
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
                className="flex cursor-pointer bg-primary dark:bg-[#1E1E1E] text-white items-center justify-center gap-1 py-[10px] md:w-[90%] w-full  rounded shadow font-medium text-[15px]"
              >
                {/* <AddOutline color={"#555"} /> */}
                Add Task
              </div>
            </div>
          ))}
          <button
            type="button"
            className=" min-w-56 mb-2  inline-block rounded font-medium xl:text-[15px] text-xs leading-5 xl:py-[0.719rem] xl:px-[1.563rem] py-2.5 px-4 border border-d-light-2 text-black bg-d-light hover:bg-d-light-2 duration-300"
          >
            <Icon icon="ic:outline-plus" className="inline" width={25} />
            Add New
          </button>
        </div>
      </DragDropContext>
      <AddProjectModal
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

export default ProjectViewNew;
