import RadioInput from "../components/RadioInput.tsx";

const Home = () => {
    return (
        <div>
            <RadioInput value={true} onChange={() => {
                console.log("Radio input clicked");
            }} label={'abcd efgh'}/>

        </div>
    );
}

export default Home;