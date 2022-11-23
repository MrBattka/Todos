import { connect } from "react-redux";
import { addTask, updateNewText } from "../redux/input-reduser";
import InputTask from "./InputTask";

const mapStateToProps = (state: any) => {
    return {
        tasks: state.inputTask.tasks,
        newTaskText: state.inputTask.newTaskText
    }
}

const InputTaskCont = connect(mapStateToProps, {addTask, updateNewText})(InputTask)

export default InputTaskCont