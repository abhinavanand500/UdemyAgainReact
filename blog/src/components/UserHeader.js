import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
const UserHeader = (props) => {
    useEffect(() => {
        props.fetchUser(props.userId);
    }, []);
    const { user } = props;
    if (!user) {
        return <div>Loading</div>;
    }
    return <div className='header'>{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find((user) => user.id === ownProps.userId) };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);
