import React,{useState,useEffect} from 'react';
import { Nav ,NavDropdown} from 'react-bootstrap';
import {Link,useParams} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/loginActions";
import { connect } from "react-redux";
import axios from 'axios';

const NavLinks = (props) => {
    const history = useHistory();
    const logOut = () => {
		props.logout();
		history.push("/");
    };
    const [data,setData] = useState([]);

    useEffect(() => {
        const URL = "https://api.indrakawasan.com/user/show";

        axios
        .get(URL)
        .then((res) => {
            setData(data);
        })
        .catch((err) => {
            if (
                err &&
                err.response &&
                err.response.data &&
                err.response.data.message
            ) {
                alert(err.response.data.message);
            } else {
                alert("Sorry we have server problem , Try again later.. ");
            }
        });
    },[]);
    
    return(
        <NavDropdown
        className="mr-5 pr-4 ml-4"
        title={
            <span>
                <i className="fa fa-user fa-fw"></i>Profile
            </span>
        }
    >
        <NavDropdown.Item className="navDropItem">
            <Link to={`/profile/${data.id}`} className="profileSetting">
                <i className="fas fa-envelope fa-fw"></i> User Profile
            </Link>
        </NavDropdown.Item>
        <NavDropdown.Item className="navDropItem">
            <Link to={"/history"} className="profileSetting">
                <i className="far fa-clock mr-2"></i>History
            </Link>
        </NavDropdown.Item>
        <NavDropdown.Item className="navDropItem" onClick={logOut}>
            <Link
                to="#"
                className="fas fa-sign-out-alt i-logout mr-2"
            ></Link>
            Logout
        </NavDropdown.Item>
    </NavDropdown>
    )
}

const mapStateToProps = (state) => {
	return {
		viaLogin: state.login.viaLogin,
	};
};

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);