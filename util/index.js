// Validator
const getRequestValidate = () => {

}

// Error response
const generateErrorResponse = (status, error) => {
    return {
        status, 
        message: error
    };
}
const generateSuccessResponse = (status, data, query={}) => {
    return {
        status, 
        data,
        query
    };
}

module.exports={
    generateErrorResponse, generateSuccessResponse
}

// Very personal clients use
// ID:   kuakat
// pass: kalopen