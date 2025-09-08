import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    let history = useNavigate();

    function setID(id, name, age) {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
    }

    function deleted(id) {
        let index = array
            .map(function (e) {
                return e.id;
            })
            .indexOf(id);
        array.splice(index, 1);
        history("/");
    }

    return (
        <div style={{ margin: "2rem" }}>
            <h1 className="text-center mb-4"><b>User Management System</b></h1>
            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>
                                    <Link to={`/edit`}>
                                        <Button onClick={() => setID(item.id, item.Name, item.Age)} variant="info" className="me-2">UPDATE</Button>
                                    </Link>
                                    <Button onClick={() => deleted(item.id)} variant="danger">DELETE</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div className="d-grid gap-2 mt-4">
                <Link to="/create">
                    <Button variant="success" size="lg"><u>Create New User</u></Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;