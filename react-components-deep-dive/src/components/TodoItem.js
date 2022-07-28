import { useEffect} from "react";

export default function TodoItem({
    id,
    text,
    onDelete
}) {
    useEffect(() =>  {
        console.log('Mounted ' + id);

        return () =>  {
            console.log('Unmounted ' + id);
        }
    
    },[]);

    return ( 
        <li >{text} <button onClick={onDelete}>x</button></li>
    );
}