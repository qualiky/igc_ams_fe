/* eslint-disable no-unused-vars */
import {
  ClassicEditor,
  Context,
  Bold,
  Essentials,
  Italic,
  List,
  Paragraph,
  ContextWatchdog,
  Alignment,
  Heading,
  Underline,
} from "ckeditor5";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import "ckeditor5/ckeditor5.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleTicket } from "../../../features/reducer/ticket/ticketSlice";
import { useSelector } from "react-redux";
import { getAllTicketList } from "../../../selectors/selectors";
import { formatDate, formatTime } from "../../../const/format-date";
import Markdown from "../../../components/Markdown";

const TicketDetail = () => {
  const [isReplying, setIsReplying] = useState(false);

  const formRef = useRef(null);

  const params = useParams();

  const dispatch = useDispatch();

  const { ticketDetail, isLoading } = useSelector(getAllTicketList);

  console.log(ticketDetail);

  useEffect(() => {
    dispatch(getSingleTicket(params?.id));
  }, [dispatch, params?.id]);

  useEffect(() => {
    if (isReplying && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isReplying]);

  const handleClick = () => {
    setIsReplying(true);
  };
  return (
    <div className="container-fluid mb-0">
      <div className="card mb-10 h-auto border-0">
        {/* <!-- /column --> */}
        <div className="xl:w-full col-xxl-auto">
          <div className="row">
            <div className="w-full">
              <div className="right-box-padding px-5">
                <div className="read-content">
                  <div className="media items-start pt-4 sm:flex block justify-between">
                    <div className="clearfix mb-4 flex">
                      <div className=" mr-2.5 h-20 w-20 rounded bg-gray-100 dark:bg-primary text-info dark:text-white text-xl font-bold flex items-center justify-center">
                        # {ticketDetail?.id}
                      </div>
                      <div className="media-body mr-2">
                        <h5 className="text-primary mb-0 mt-1">
                          {ticketDetail?.attributes?.title}
                        </h5>
                        <p className="mb-0">
                          {formatDate(
                            ticketDetail?.attributes?.createdAt || ""
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="clearfix mb-4">
                      <a
                        onClick={handleClick}
                        className="btn cursor-pointer sm:py-[0.719rem] py-2.5 px-4 bg-primary-light text-primary duration-300 hover:bg-primary hover:text-white dark:text-white rounded-md text-[13px] leading-5 btn-primary my-1 light inline-block border border-primary-light mr-2"
                      >
                        <i className="fa fa-reply"></i>{" "}
                      </a>

                      <a className="btn cursor-pointer sm:py-[0.719rem] py-2.5 px-4 bg-primary-light text-primary duration-300 hover:bg-primary hover:text-white dark:text-white rounded-md text-[13px] leading-5 btn-primary my-1 light inline-block border border-primary-light mr-2">
                        <i className="fa fa-trash"></i>
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-start mb-2 mt-4">
                    <div className="media-body">
                      <span className="text-body-color sm:text-sm text-xs pull-end">
                        {formatTime(ticketDetail?.attributes?.createdAt)}
                      </span>
                      <h5 className="text-[#6a707e] my-1 text-primary">
                        {ticketDetail?.attributes?.title}
                      </h5>
                      {/* <p className="read-content-email mb-3.5">
                        To: Me, info@example.com
                      </p> */}
                    </div>
                  </div>
                  <div className="read-content-body">
                    {/* <h5 className="text-[#6a707e] mb-6">Hi,Ingredia,</h5>
                    <p className="mb-2">
                      <strong className="text-[#6a707e]">
                        Ingredia Nutrisha,
                      </strong>{" "}
                      A collection of textile samples lay spread out on the
                      table - Samsa was a travelling salesman - and above it
                      there hung a picture
                    </p>
                    <p className="mb-2">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name of Lorem
                      Ipsum decided to leave for the far World of Grammar.
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                      lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    </p>
                    <p className="mb-2">
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                      lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                      Phasellus viverra nulla ut metus varius laoreet. Quisque
                      rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                      Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                      rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                      sem quam semper libero, sit amet adipiscing sem neque sed
                      ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                    </p>
                    <h5 className="pt-4 mb-2">Kind Regards</h5>
                    <p className="mb-[1.875rem]">Mr Smith</p> */}
                    <Markdown
                      htmlContent={ticketDetail?.attributes?.description}
                      className="pt-4 mb-2 text-justify"
                    />
                  </div>

                  {/* -----------Reply Goes here------------ */}
                  <div className="row">
                    <div className="w-full p-0">
                      <div className="card-header flex justify-between px-3 pt-6 relative z-[2] pb-0">
                        <h4 className="card-title text-black font-medium text-xl capitalize">
                          Replies
                        </h4>
                      </div>
                      <div className="p-0">
                        <div
                          id="DZ_W_TimeLine"
                          className="widget-timeline dz-scroll overflow-hidden h-auto my-6 px-3"
                        >
                          <ul className="timeline relative">
                            {Array.from({ length: 2 }).map((item, index) => (
                              <li
                                key={index}
                                className="mb-[0.9375rem] relative"
                              >
                                <div className="timeline-badge rounded-full h-[1.275rem] left-0 absolute top-[0.625rem] w-[1.275rem] border-2 border-d-light bg-white dark p-1"></div>
                                <a className="timeline-panel  bg-d-light border-d-light dark:border-[#6e6e6e59] dark:bg-[#6e6e6e59]">
                                  <span className="text-xs block mb-[0.3125rem] opacity-80 tracking-[0.0625rem] text-body-color">
                                    20 minutes ago
                                  </span>
                                  <div className="read-content-body">
                                    <h5 className="text-[#6a707e] mb-6">
                                      Hi,Ingredia,
                                    </h5>
                                    <p className="mb-2">
                                      <strong className="text-[#6a707e]">
                                        Ingredia Nutrisha,
                                      </strong>{" "}
                                      A collection of textile samples lay spread
                                      out on the table - Samsa was a travelling
                                      salesman - and above it there hung a
                                      picture
                                    </p>
                                    <p className="mb-2">
                                      Even the all-powerful Pointing has no
                                      control about the blind texts it is an
                                      almost unorthographic life One day however
                                      a small line of blind text by the name of
                                      Lorem Ipsum decided to leave for the far
                                      World of Grammar. Aenean vulputate
                                      eleifend tellus. Aenean leo ligula,
                                      porttitor eu, consequat vitae, eleifend
                                      ac, enim. Aliquam lorem ante, dapibus in,
                                      viverra quis, feugiat a, tellus.
                                    </p>
                                    <p className="mb-2">
                                      Aenean vulputate eleifend tellus. Aenean
                                      leo ligula, porttitor eu, consequat vitae,
                                      eleifend ac, enim. Aliquam lorem ante,
                                      dapibus in, viverra quis, feugiat a,
                                      tellus. Phasellus viverra nulla ut metus
                                      varius laoreet. Quisque rutrum. Aenean
                                      imperdiet. Etiam ultricies nisi vel augue.
                                      Curabitur ullamcorper ultricies nisi. Nam
                                      eget dui. Etiam rhoncus. Maecenas tempus,
                                      tellus eget condimentum rhoncus, sem quam
                                      semper libero, sit amet adipiscing sem
                                      neque sed ipsum. Nam quam nunc, blandit
                                      vel, luctus pulvinar,
                                    </p>
                                    <h5 className="pt-4 mb-2">Kind Regards</h5>
                                    <p className="mb-[1.875rem]">Mr Smith</p>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* -----------Reply Ends here------------ */}
                  <div className="read-content-attachment flex gap-4 mb-10 justify-end">
                    <button
                      onClick={handleClick}
                      className="btn btn-secondary py-[10px] px-5 text-[13px] rounded text-white dz-modal-btn bg-secondary leading-[18px] inline-block border border-secondary btn-sm"
                      data-dz-modal="exampleModalCenter"
                    >
                      <i className="fa-solid fa-reply mr-3"></i>
                      Reply
                    </button>
                  </div>

                  <div
                    className={`mb-4 pt-0 ${isReplying ? "" : "hidden"}`}
                    ref={formRef}
                  >
                    <div className="flex mb-5">
                      <img
                        src="/assets/images/contacts/d1.jpg"
                        className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                        alt=""
                      />
                      <div className="ml-2">
                        <h6 className="text-sm mb-2 font-semibold">
                          Replying to{" "}
                        </h6>
                        <span className="text-xs text-black whitespace-nowrap bg-info-light ps-2 pr-3 rounded py-1 ">
                          aasthagautam@gmail.com
                        </span>
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <CKEditorContext
                      context={Context}
                      contextWatchdog={ContextWatchdog}
                    >
                      <CKEditor
                        editor={ClassicEditor}
                        config={{
                          plugins: [
                            Essentials,
                            Bold,
                            Italic,
                            Paragraph,
                            List,
                            Alignment,
                            Heading,
                            Underline,
                          ],
                          toolbar: [
                            "undo",
                            "redo",
                            "|",
                            "heading",
                            "|",
                            "bold",
                            "italic",
                            "underline",
                            "|",
                            "numberedList",
                            "bulletedList",
                            "|",
                            "alignment",
                          ],
                        }}
                        data="<p>Hello from the second editor working with the context!</p>"
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor 2 is ready to use!", editor);
                        }}
                      />
                    </CKEditorContext>
                  </div>
                </div>
                {isReplying && (
                  <div className="text-right">
                    {isReplying && (
                      <button
                        onClick={() => setIsReplying(false)}
                        type="button"
                        className="mr-1 mb-2 inline-block rounded font-medium xl:text-[15px] text-xs leading-5 xl:py-[0.719rem] xl:px-[1.563rem] py-2.5 px-4 border border-danger-light text-danger bg-danger-light hover:text-white hover:bg-danger duration-300"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      className="btn btn-primary ms-4 xl:py-[0.719rem] xl:px-[1.563rem] py-2.5 px-4 duration-300 sm:text-[15px]  font-medium rounded text-white bg-primary leading-[20px] inline-block border hover:bg-hover-primary mb-4"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
