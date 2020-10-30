import jsonplaceholder from "../apis/jsonplaceholder";
export const fetchPost = () => {
    return async (dispatch) => {
        const response = await jsonplaceholder.get("/posts");
        console.log(response)
        dispatch({ type: "FETCH_POST", payload: response });
    };
};
