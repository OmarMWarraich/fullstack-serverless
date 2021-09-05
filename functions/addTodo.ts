const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
import Todo from "./Todo";

async function addTodo(todo: Todo) {
    const params = {
        TableName: process.env.TODOS_TABLE,
        Item: todo
    }
    try {
        await docClient.put(params).promise();
        return todo;
    } catch (error) {
        console.log("DynamoDB error: ", error);
        return null;
    }
}

export default addTodo;