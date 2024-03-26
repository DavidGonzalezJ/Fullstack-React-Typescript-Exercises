import { CoursePart } from "../types";

const Contents = ({courseParts} : {courseParts: CoursePart[]}) => {
    return (
        <>
            {courseParts.map(part => {
                return <p>
                    {part.name} 
                    {part.exerciseCount}
                    </p>;
            })}
        </>
    )
};

export default Contents;