import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectTaskDetail } from "../../../features/reducer/project/projectDetailSlice";
import { useSelector } from "react-redux";
import { getLoginData, getTaskDetail } from "../../../selectors/selectors";
import { formatDate } from "../../../const/format-date";
import AvatarByNameSmall from "../../../components/AvatarByNameSmall";
import { base_img_url } from "../../../utils/base_img_url";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextArea from "../../../components/inputs/custom-textarea";
import { projectDetailService } from "../../../features/api-service/project-action/projectDetailAction";
import NotFound from "../../../components/NotFound";

const commentSchema = yup.object().shape({
  comment: yup.string().required(),
  commentingUser: yup.string().required(),
  commentId: yup.string(),
  projectTask: yup.string().required(),
});

const TaskDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const taskData = useSelector(getTaskDetail);

  console.log(taskData);

  const { user } = useSelector(getLoginData);

  useEffect(() => {
    dispatch(getProjectTaskDetail(params?.id));
  }, [dispatch, params?.id]);

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentSchema),
    defaultValues: {
      comment: "",
      commentingUser: "",
      commentId: "",
      projectTask: "",
    },
  });

  useEffect(() => {
    setValue("projectTask", params?.id);
  }, [params?.id, setValue]);

  useEffect(() => {
    setValue("commentingUser", user?.id);
  }, [setValue, user?.id]);

  const onSubmit = async (data) => {
    try {
      const resPayload = await projectDetailService.addTaskComment({ data });

      dispatch(getProjectTaskDetail(params?.id));
    } catch (error) {
      console.log(error?.response?.data?.error?.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="w-full">
          <div className="card">
            <div className="p-5">
              <div className="post-details">
                <h3 className="mb-2 text-black">
                  Task title :{" "}
                  <strong>{taskData?.attributes?.taskTitle}</strong>
                </h3>
                <ul className="mb-6 post-meta flex flex-wrap">
                  {/* <li className="post-author text-body-color text-sm mr-4">
                    By Roshan Nyaupane
                  </li> */}
                  <li className="post-date text-body-color text-sm mr-4">
                    <i className="far fa-calendar-plus mr-2"></i>
                    {formatDate(taskData?.attributes?.startDate)}
                  </li>
                  <li className="post-comment text-body-color text-sm">
                    <i className="far fa-comment mr-2"></i>
                    {taskData?.attributes?.comments?.data.length}
                  </li>
                </ul>
                {/* <img
                  src="/assets/images/profile/8.jpg"
                  alt=""
                  className="w-full mb-4 h-auto rounded"
                /> */}
                <div className=" bg-stone-100 dark:bg-[#242424] rounded min-h-[300px]  border-2 border-b-color px-3 py-2 focus:border-primary">
                  <p className="mb-4">
                    {taskData?.attributes?.taskDescription}
                  </p>
                </div>

                <div className="profile-skills mb-12 mt-12 ">
                  <h4 className="text-primary mb-2 text-lg">Team Members</h4>
                  {taskData?.attributes?.teamMembers?.data.length > 0 ? (
                    taskData?.attributes?.teamMembers?.data((item, index) => (
                      <a
                        key={index}
                        className="btn cursor-pointer btn-primary mx-2 py-[0.438rem] text-xs font-medium rounded text-primary bg-primary-light leading-5 inline-block duration-500 hover:text-white light border border-primary-light px-4 mb-1"
                      >
                        <div className="flex items-center">
                          {item?.attributes?.profileImage?.data?.attributes
                            ?.url ? (
                            <img
                              src={
                                base_img_url +
                                item?.attributes?.profileImage?.data?.attributes
                                  ?.url
                              }
                              className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                              width="30px"
                              height="30px"
                              alt=""
                            />
                          ) : (
                            <AvatarByNameSmall
                              firstname={item?.attributes?.firstName}
                            />
                          )}
                          <p className="ml-2 dark:text-white text-[13px]">
                            {item?.attributes?.firstName}{" "}
                            {item?.attributes?.lastName}
                          </p>
                        </div>
                      </a>
                    ))
                  ) : (
                    <NotFound title="No employee assigned" />
                  )}
                </div>

                <div className="w-full">
                  <div className="card border-0 pb-0">
                    <div className="card-header flex justify-between  relative z-[2] pb-0">
                      <h4 className="text-primary text-lg " id="reply-title">
                        Comments ({taskData?.attributes?.comments?.data.length})
                      </h4>
                    </div>
                    <div className="card-body p-0">
                      <div
                        id="DZ_W_Todo3"
                        className="widget-media dz-scroll overflow-y-scroll overflow-x-hidden h-[15.125rem] my-6 px-6"
                      >
                        <ul className="timeline relative">
                          {taskData?.attributes?.comments?.data?.map(
                            (item, index) => (
                              <li key={index}>
                                <div className="timeline-panel flex items-center relative rounded-md py-[0.8rem] px-3 mx-[-5px] duration-500 hover:bg-[#0d99ff0d]">
                                  <div className="media flex items-center justify-center w-[2.4rem] h-[2.4rem] bg-[#eee] rounded-full text-[13px] text-center overflow-hidden font-semibold self-start mr-2 media-info">
                                    {item?.attributes?.commentingUser?.data
                                      ?.attributes?.profileImage?.data?.[0]
                                      ?.attributes?.url ? (
                                      <img
                                        alt="image"
                                        width="50"
                                        src={
                                          base_img_url +
                                          item?.attributes?.commentingUser?.data
                                            ?.attributes?.profileImage
                                            ?.data?.[0]?.attributes?.url
                                        }
                                      />
                                    ) : (
                                      <>
                                        {item?.commentingUser?.data?.attributes?.firstName?.charAt(
                                          0
                                        )}{" "}
                                        {item?.commentingUser?.data?.attributes?.lastName?.charAt(
                                          0
                                        )}
                                      </>
                                    )}
                                  </div>
                                  <div className="media-body flex-1">
                                    <h5 className="mb-1 leading-6">
                                      {
                                        item?.attributes?.commentingUser?.data
                                          ?.attributes?.firstName
                                      }{" "}
                                      {
                                        item?.attributes?.commentingUser?.data
                                          ?.attributes?.lastName
                                      }{" "}
                                      <small className="text-body-color text-[8px]  dark:text-white">
                                        {formatDate(
                                          item?.attributes?.createdAt
                                        )}
                                      </small>
                                    </h5>
                                    <p className="mb-1 text-xs">
                                      {item?.attributes?.comment}
                                    </p>
                                  </div>
                                  <div className="dropdown">
                                    <button
                                      type="button"
                                      className="btn btn-info w-[2.4rem] h-[2.4rem] p-[0.4375rem] bg-info-light text-info rounded-md flex justify-center items-center dz-dropdown duration-500 hover:bg-info light sharp"
                                      data-dz-dropdown="dropdown-14"
                                    >
                                      <Icon
                                        className="hover:text-white"
                                        icon="bi:three-dots-vertical"
                                      />
                                    </button>
                                    <div
                                      className="dz-dropdown-menu dropdown-menu-end absolute translate-x-[-125px] translate-y-[8px] overflow-hidden rounded-md z-[9] bg-white dark:bg-[#242424] dark:shadow-[0rem_0rem_0rem_0.0625rem_rgba(255,255,255,0.1)] shadow-[0_0_3.125rem_0_rgba(82,63,105,0.15)] min-w-[10rem] text-left py-2 hidden"
                                      id="dropdown-14"
                                    >
                                      <a className="dropdown-item py-2 px-5 text-body-color text-[13px] text-left block w-full whitespace-nowrap hover:bg-[#f8f9fa] hover:text-primary dark:bg-transparent dark:text-white">
                                        Edit
                                      </a>
                                      <a className="dropdown-item py-2 px-5 text-body-color text-[13px] text-left block w-full whitespace-nowrap hover:bg-[#f8f9fa] hover:text-primary dark:bg-transparent dark:text-white">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-respond" id="respond">
                  <h4 className="text-primary text-lg mb-4" id="reply-title">
                    Leave a Reply{" "}
                  </h4>
                  <form
                    className="comment-form"
                    onSubmit={handleSubmit(onSubmit)}
                    id="commentform"
                    method="post"
                  >
                    <div className="row">
                      <div className="w-full">
                        <div className="mb-3">
                          <CustomTextArea
                            control={control}
                            name="comment"
                            type="text"
                            width="w-full"
                            label="Comment"
                            hideLabel
                            rows={6}
                            errors={errors}
                          />
                          <div className="w-full">
                            <div className="mb-3">
                              {/* <input
                                  type="submit"
                                  value="Post Comment"
                                  className="btn py-[0.719rem] max-xl:py-2.5 text-[15px] max-xl:text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block  duration-500 hover:bg-hover-primary mb-1 sm:px-[1.563rem] px-4 btn-primary"
                                  id="submit"
                                  name="submit"
                                /> */}

                              <button
                                type="submit"
                                className="mr-1 mb-2 inline-block rounded font-medium xl:text-[15px] text-xs leading-5 xl:py-[0.719rem] xl:px-[1.563rem] py-2.5 px-4 border border-primary text-white bg-primary hover:bg-hover-primary hover:border-hover-primary duration-300"
                              >
                                Post Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
