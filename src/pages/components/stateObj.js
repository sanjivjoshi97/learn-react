import {useState} from 'react';

export default function PersonData() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [age, setAge] = useState(0);
    const [person, setPerson] = useState({fullName: '', age: 0})

    function handleClick() {
        let name = fName + ' ' + lName;
        setPerson({fullName: name, age: age});
    }

    return (
        <>
            <label>FName</label>
            <textarea value={fName} onChange={e => setFName(e.target.value)}/>
            <label>LName</label>
            <textarea value={lName} onChange={e => setLName(e.target.value)}/>
            <label>Age</label>
            <textarea value={age} onChange={e => setAge(e.target.value)}/>
            <button onClick={handleClick}> Save</button>
            {person.fullName && <p> Person: {person.fullName} is {person.age} years old </p>}
        </>
    )
}