import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "../App.css";

export default function TodosPureReact() {
  const [todoHeadline, setTodoHeadline] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const [todos, setTodos] = useState([]);

  const [id, setId] = useState(0);

  const [actionMessage, setActionMessage] = useState("");
  const [msgColor, setMsgColor] = useState("");
  const [headlineError, setHeadlineError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [editedTodoId, setEditedTodoId] = useState(0);

  const [isEditTaskClicked, setIsEditTaskClicked] = useState(false);
  const [isEditHeadlineClicked, setIsEditHeadlineClicked] = useState(false);
  const [editedHeadline, setEditedHeadline] = useState(todoHeadline);

  const [isEditDescriptionClicked, setIsEditDescriptionClicked] =
    useState(false);
  const [editedDescription, setEditedDescription] = useState(todoDescription);

  const [myName, setMyname] = useState("Developer : Sagar Ghumare");

  const [isToggleClicked, setIsToggleClicked] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMyname("");
  //   }, 2000);
  // }, []);
  const [headlineBorder, setHeadlineBorder] = useState("");
  const [descInputBorderColor, setDescInputBorderColor] = useState("");
  function addTask(headline, description) {
    if (headline == "" || description == "") {
      if (description == "") {
        setDescriptionError("Empty Description !");
        setDescInputBorderColor("border-danger");
      } else {
        setDescriptionError("");
        setDescInputBorderColor("");
      }
      if (headline == "") {
        setHeadlineError("Empty Headline !");
        setHeadlineBorder("border-danger");
      } else {
        setHeadlineError("");
        setHeadlineBorder("");
      }
    } else {
      setDescInputBorderColor("");
      setHeadlineBorder("");
      setActionMessage("Task Added !!!");
      setId(id + 1);
      const newTask = {
        id,
        headline,
        description,
      };
      setTodos([newTask, ...todos]);
      setHeadlineError("");
      setDescriptionError("");
      setMsgColor("green");
      setTimeout(() => {
        setActionMessage("");
      }, 2000);
      clearField();
    }
    // setTimeout(() => {
    //   setHeadlineError("");
    //   setDescriptionError("");
    // }, 2000);
  }

  const [editDeleteMsg, setEditDeleteMsg] = useState("");

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    setActionMessage("Task Deleted !!!");
    setMsgColor("red");
    setTimeout(() => {
      setActionMessage("");
    }, 3000);
  }

  function editTask(todo) {
    setTodoHeadline(todo.headline);
    setTodoDescription(todo.description);
    setEditedTodoId(todo.id);
    setIsEditTaskClicked(!isEditTaskClicked);

    setHeadlineError("");
    setHeadlineBorder("");
    setDescriptionError("");
    setDescInputBorderColor("");

    if (isEditTaskClicked) {
      clearField();
    }

    if (!document.getElementById("edit-cancel")) {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
      setHeadlineBorder("border-info");
      setDescInputBorderColor("border-info");
    }
  }

  function updateTask(headline, description) {
    let index = 0;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == editedTodoId) {
        break;
      }
      index = index + 1;
    }

    console.log("index :" + index);

    todos[index].headline = headline;
    todos[index].description = description;
    setTodos(todos);

    setMsgColor("blue");
    setActionMessage("Task Updated !!!");
    setTimeout(() => {
      setActionMessage("");
    }, 3000);
    clearField();
    setIsEditTaskClicked(false);
    setHeadlineBorder("");
    setDescInputBorderColor("");
  }

  let toggleButtonColor = "btn-dark";
  if (isToggleClicked) {
    toggleButtonColor = "btn-light text-dark";
    document.body.style.backgroundColor = "black";
  } else {
    toggleButtonColor = "btn-dark";
    document.body.style.backgroundColor = "white";
  }

  function clearField() {
    setTodoHeadline("");
    setTodoDescription("");
  }
  return (
    <>
      <div className="p-1">
        <div
          className={`d-flex border rounded justify-content-between ${
            isToggleClicked
              ? "text-warning bg-dark  border-secondary"
              : "text-success bg-light"
          }`}
        >
          <div id="title" className="p-2 fs-2 justify-content-start">
            Todoz
          </div>

          <div className="">
            <span className="form-check form-switch fs-4">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => setIsToggleClicked(!isToggleClicked)}
              />
            </span>
            <span className="fs-1 mt-2">
              {isToggleClicked ? (
                <span>&#9789; </span>
              ) : (
                <span className="text-warning"> &#9788;</span>
              )}
            </span>
          </div>
        </div>

        <div
          id="myname"
          className={`text-end mt-2 mb-2 pt-2 pb-2 ${
            isToggleClicked ? "text-warning" : "text-primary"
          }`}
        >
          <span className="border rounded p-2">{myName}</span>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div
              className={`border rounded p-4 ${
                isToggleClicked ? "border-secondary" : ""
              }`}
            >
              <div class="mb-3 row">
                <label
                  for={`${
                    isToggleClicked ? "headlineInputDark" : "headlineInputLight"
                  }`}
                  className={`col-6 fw-bold form-label text-start ${
                    isToggleClicked ? "text-info" : "text-primary"
                  }`}
                >
                  Task headline
                </label>
                <span className={`col-6 text-end text-danger`}>
                  {headlineError}
                </span>
                <input
                  type="text"
                  id={`${
                    isToggleClicked ? "headlineInputDark" : "headlineInputLight"
                  }`}
                  placeholder="write your task headline..."
                  class="form-control"
                  className={`form-control input border-secondary ${headlineBorder} ${
                    isToggleClicked
                      ? "bg-dark text-light "
                      : "bg-light text-dark"
                  } `}
                  value={todoHeadline}
                  onChange={(e) => setTodoHeadline(e.target.value)}
                />
              </div>
              <div class="mb-3 row">
                <label
                  for={`${
                    isToggleClicked
                      ? "descriptionInputDark"
                      : "descriptionInputLight"
                  }`}
                  className={`col-6 fw-bold form-label ${
                    isToggleClicked ? "text-info" : "text-primary"
                  }`}
                >
                  Task Description
                </label>
                <span className={`col-6 text-end text-danger`}>
                  {descriptionError}
                </span>
                <textarea
                  placeholder="write your task decsciption..."
                  className={`form-control border-secondary ${descInputBorderColor} ${
                    isToggleClicked
                      ? " bg-dark text-light"
                      : "bg-light text-dark"
                  }`}
                  id={`${
                    isToggleClicked
                      ? "descriptionInputDark"
                      : "descriptionInputLight"
                  }`}
                  value={todoDescription}
                  onChange={(e) => setTodoDescription(e.target.value)}
                />
              </div>

              <div className="row text-center">
                <span className="col-4">
                  <button
                    className={`w-75 btn btn-outline-info ${
                      isToggleClicked ? "text-light" : "text-dark"
                    }`}
                    onClick={() => clearField()}
                  >
                    Clear
                  </button>
                </span>
                <span className="col-8">
                  {!isEditTaskClicked ? (
                    <button
                      type="button"
                      onClick={() => addTask(todoHeadline, todoDescription)}
                      className={`btn w-100 text-light btn-success`}
                    >
                      Add Task
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => updateTask(todoHeadline, todoDescription)}
                      className={`btn w-100 text-light btn-primary`}
                    >
                      Update Task
                    </button>
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="col-sm-7 mx-2">
            <div class="row mt-2 pt-2 justify-content-start">
              <div
                className={`col-6 fs-3 text-center ${
                  isToggleClicked ? "text-light" : "text-dark"
                }`}
              >
                Task List
              </div>
              <div className="col-6 text-start p-2" style={{ color: msgColor }}>
                {actionMessage}
              </div>
              <hr
                className={`${isToggleClicked ? "text-light" : "text-dark"}`}
              />
            </div>
            <div>
              {todos.length > 0 ? (
                <table
                  className={`table ${
                    isToggleClicked ? "table-dark" : "table-light"
                  }`}
                >
                  <thead>
                    <tr className="row">
                      {/* <th
                        scope="col"
                        className={`${
                          isToggleClicked ? "text-info" : "text-primary"
                        }`}
                      >
                        #
                      </th> */}
                      <th
                        scope="col"
                        className={`col-4 ${
                          isToggleClicked ? "text-info" : "text-primary"
                        }`}
                      >
                        Headline
                      </th>
                      <th
                        scope="col"
                        className={`col-4 text-start ${
                          isToggleClicked ? "text-info" : "text-primary"
                        }`}
                      >
                        Description
                      </th>
                      <th scope="col" className={`col-4 text-end text-danger`}>
                        Edit/Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {todos.map((todo) => (
                      <tr className="row">
                        {/* <td scope="row">{todo.id}</td> */}
                        <td className="col-4">{todo.headline}</td>
                        <td className="col-4">{todo.description}</td>

                        <td className="col-4 p-2 text-end">
                          <span className="text-start">
                            {/* <Tooltip anchorSelect=".edit-desc" place="top">
                                Edit Description
                              </Tooltip> */}
                            <a className="edit-desc">
                              <button
                                id="edit-btn"
                                type="button"
                                onClick={() => editTask(todo)}
                                className={`btn ${
                                  isToggleClicked
                                    ? "text-light btn-outline-success "
                                    : "text-dark btn-outline-info"
                                }`}
                              >
                                {isEditTaskClicked &&
                                editedTodoId === todo.id ? (
                                  <span
                                    id="edit-cancel"
                                    className={`${
                                      isToggleClicked ? "text-light" : ""
                                    }`}
                                  >
                                    Cancel
                                  </span>
                                ) : (
                                  <span id="edit">Edit</span>
                                )}
                              </button>
                            </a>
                          </span>
                          {/* <Tooltip anchorSelect=".delete" place="top">
                            Delete Task
                          </Tooltip> */}

                          <span className="text-end mx-1">
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-toggle="modal"
                              onClick={() =>
                                setEditDeleteMsg(
                                  isEditTaskClicked && editedTodoId === todo.id
                                    ? "This task is under edit, can't delete !"
                                    : ""
                                )
                              }
                              data-target={`#${todo.id}`}
                            >
                              &#10007;
                            </button>

                            <div
                              class="modal fade"
                              id={todo.id}
                              tabindex="-1"
                              role="dialog"
                              aria-labelledby="exampleModalCenterTitle"
                              aria-hidden="true"
                            >
                              <div
                                class="modal-dialog modal-dialog-centered"
                                role="document"
                              >
                                <div class="modal-content">
                                  <div
                                    className={`modal-body ${
                                      isToggleClicked
                                        ? "bg-dark text-light"
                                        : "bg-light text-dark"
                                    }`}
                                  >
                                    <h5>Are your sure ?</h5>
                                    <h6 className="text-danger">
                                      {editDeleteMsg}
                                    </h6>
                                  </div>
                                  <div
                                    className={`modal-footer ${
                                      isToggleClicked ? "bg-dark" : "bg-light"
                                    }`}
                                  >
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-dismiss="modal"
                                      onClick={() => setEditDeleteMsg("")}
                                    >
                                      No, Cancel
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      disabled={editDeleteMsg.length !== 0}
                                      data-dismiss="modal"
                                      onClick={() => deleteTask(todo.id)}
                                    >
                                      Yes, Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                          {/* <a className="delete">
                            <button
                              type="button"
                              onClick={() => deleteTask(todo.id)}
                              className="btn btn-danger px-2"
                            >
                              &#9003;
                            </button>
                          </a> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
