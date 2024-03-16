import { FC } from "react";
import Sidebar from "../shared/Sidebar";
import QuestionsLists from "./QuestionsLists";

const QuestionWrapper: FC = () => {
    return (
        <div className='flex text-gray-900 bg-gray-100 dark:bg-dark dark:text-light'>
            <Sidebar />
            <QuestionsLists />
        </div>
    )
}

export default QuestionWrapper;