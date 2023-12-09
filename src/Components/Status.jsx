import React, { useEffect, useState } from "react";
import "../CSS/Status.css";
import baccklog from "../Img/backlog.jpg";
import circle from "../Img/circle.png";
import proogress from "../Img/progress.png";
import cut from "../Img/cut.png";
import doone from "../Img/done.png";
import profile from "../Img/profile.png";
import exclamation from "../Img/exclamation.png";
import plus from "../Img/plus.png";
import horiDot from "../Img/horiDot.jpg";

const sortByPriority = (tasks) => tasks.sort((a, b) => a.priority - b.priority);
const sortByTitle = (tasks) => tasks.sort((a, b) => b.title.localeCompare(a.title));

const Status = (props) => {
    const [backlog, setBacklog] = useState([]);
    const [todo, setTodo] = useState([]);
    const [progress, setProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [cancel, setCancel] = useState([]);

    useEffect(() => {
        // Set initial state based on task status
        setBacklog(props.tasks.filter((task) => task.status === "Backlog"));
        setTodo(props.tasks.filter((task) => task.status === "Todo"));
        setProgress(props.tasks.filter((task) => task.status === "In progress"));
        setDone(props.tasks.filter((task) => task.status === "Done"));
        setCancel(props.tasks.filter((task) => task.status === "Cancel"));

        // Apply sorting based on order

        if (props.order === "title") {
            setBacklog(prevBacklog => sortByTitle([...prevBacklog]));
            setTodo(prevTodo => sortByTitle([...prevTodo]));
            setProgress(prevProgress => sortByTitle([...prevProgress]));
            setDone(prevDone => sortByTitle([...prevDone]));
            setCancel(prevCancel => sortByTitle([...prevCancel]));
            console.log(backlog);
        } 
        if(props.order==="priority") {
            setBacklog(prevBacklog => sortByPriority([...prevBacklog]));
            setTodo(prevTodo => sortByPriority([...prevTodo]));
            setProgress(prevProgress => sortByPriority([...prevProgress]));
            setDone(prevDone => sortByPriority([...prevDone]));
            setCancel(prevCancel => sortByPriority([...prevCancel]));
            console.log(backlog);
        }
    }, [props.order,props.tasks]);

    return (
        <div className="inner">
            <div className="outer">
                <div className="main" style={{backgroundColor:"white"}}>
                    <div className="backlog">
                        <div style={{ display: "flex", columnGap: "9px", justifyContent: "flex-start" }}>
                            <img src={baccklog} width={"40px"} height={"40px"}></img>
                            <p>Backlog</p>
                            <p>{backlog.length}</p>
                        </div>
                        <div style={{display:"flex", columnGap:"10px",fontSize:"10px",alignContent:"center"}}>
                            <img src={plus} width={"20px"} height={"20px"}></img>
                            <img src={horiDot} width={"30px"} alt="" />
                        </div>
                    </div>
                    <div>
                        {backlog.map((task) => (
                            <div className="card" key={task.id}>
                                <div className="upper">
                                    <p>{task.id}</p>
                                    <img src={profile} alt="Profile" width={"50px"} />
                                </div>
                                <div>
                                    <h5>{task.title}</h5>
                                </div>
                                <div className="tag">
                                    <div className="exclamation">
                                        <img src={exclamation} alt="Exclamation" width={"20px"} />
                                    </div>
                                    <div className="feature">
                                        <p>Feature Request</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="main" style={{backgroundColor:"white"}}>
                    <div className="todo">
                        <div style={{ display: "flex", columnGap: "9px", justifyContent: "flex-start" }}>
                            <img src={circle} width={"30px"} height={"30px"} style={{placeSelf:"center"}}></img>
                            <p>To Do</p>
                            <p>{todo.length}</p>
                        </div>
                        <div style={{display:"flex", columnGap:"10px",fontSize:"10px",alignContent:"center"}}>
                            <img src={plus} width={"20px"} height={"20px"}></img>
                            <img src={horiDot} width={"30px"} alt="" />
                        </div>
                    </div>
                    <div>
                        {todo.map((task) => (
                            <div className="card" key={task.id}>
                                <div className="upper">
                                    <p>{task.id}</p>
                                    <img src={profile} alt="Profile" width={"50px"} />
                                </div>
                                <div>
                                    <h5>{task.title}</h5>
                                </div>
                                <div className="tag">
                                    <div className="exclamation">
                                        <img src={exclamation} alt="Exclamation" width={"20px"} />
                                    </div>
                                    <div className="feature">
                                        <p>Feature Request</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="main" style={{backgroundColor:"white",maxWidth:"25vw"}}>
                    <div className="inProgress">
                        <div style={{ display: "flex", columnGap: "9px", justifyContent: "flex-start" }}>
                            <img src={proogress} width={"50px"} style={{placeSelf:"center"}} height={"30px"}></img>
                            <p>In Progress</p>
                            <p>{progress.length}</p>
                        </div>
                        <div style={{display:"flex", columnGap:"10px",fontSize:"10px",alignContent:"center"}}>
                            <img src={plus} width={"20px"} height={"20px"}></img>
                            <img src={horiDot} width={"30px"} alt="" />
                        </div>
                    </div>
                    <div>
                        {progress.map((task) => (
                            <div className="card" key={task.id}>
                                <div className="upper">
                                    <p>{task.id}</p>
                                    <img src={profile} alt="Profile" width={"50px"} />
                                </div>
                                <div>
                                    <h5>{task.title}</h5>
                                </div>
                                <div className="tag">
                                    <div className="exclamation">
                                        <img src={exclamation} alt="Exclamation" width={"20px"} />
                                    </div>
                                    <div className="feature">
                                        <p>Feature Request</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="main" style={{backgroundColor:"white"}}>
                    <div className="Done">
                        <div style={{ display: "flex", columnGap: "9px", justifyContent: "flex-start" }}>
                            <img src={doone} width={"30px"} style={{placeSelf:"center"}} height={"30px"}></img>
                            <p>Done</p>
                            <p>{done.length}</p>
                        </div>
                        <div style={{display:"flex", columnGap:"10px",fontSize:"10px",alignContent:"center"}}>
                            <img src={plus} width={"20px"} height={"20px"}></img>
                            <img src={horiDot} width={"30px"} alt="" />
                        </div>
                    </div>
                    <div>
                        {done.map((task) => (
                            <div className="card" key={task.id}>
                                <div className="upper">
                                    <p>{task.id}</p>
                                    <img src={profile} alt="Profile" width={"50px"} />
                                </div>
                                <div>
                                    <h5>{task.title}</h5>
                                </div>
                                <div className="tag">
                                    <div className="exclamation">
                                        <img src={exclamation} alt="Exclamation" width={"20px"} />
                                    </div>
                                    <div className="feature">
                                        <p>Feature Request</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="main" style={{backgroundColor:"white"}}>
                    <div className="canceled">
                        <div style={{ display: "flex", columnGap: "9px", justifyContent: "flex-start" }}>
                            <img src={cut} style={{placeSelf:"center"}} width={"30px"} height={"30px"}></img>
                            <p>Canceled</p>
                            <p>{cancel.length}</p>
                        </div>
                        <div style={{display:"flex", columnGap:"10px",fontSize:"10px",alignContent:"center"}}>
                            <img src={plus} width={"20px"} tyle={{alignContent:"center"}} height={"20px"}></img>
                            <img src={horiDot} width={"30px"} alt="" />
                        </div>
                    </div>
                    <div>
                        {cancel.map((task) => (
                            <div className="card" key={task.id}>
                                <div className="upper">
                                    <p>{task.id}</p>
                                    <img src={profile} alt="Profile" width={"50px"} />
                                </div>
                                <div>
                                    <h5>{task.title}</h5>
                                </div>
                                <div className="tag">
                                    <div className="exclamation">
                                        <img src={exclamation} alt="Exclamation" width={"20px"} />
                                    </div>
                                    <div className="feature">
                                        <p>Feature Request</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Status;