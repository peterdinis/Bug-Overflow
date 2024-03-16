import { FC } from "react";
import {Input} from "@/components/ui/input";

const QuestionSearch: FC = () => {
    return (
        <>
         <Input type="search" name="" id=""  placeholder="search for images" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
        </>
    )
}

export default QuestionSearch;