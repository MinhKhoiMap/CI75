const CallAPIBtn = (props) => {

    const handleShowProducts = props.func;


    return (
        <button
            className="call-btn"
            onClick={handleShowProducts}
        >Show more products</button>
    );
}

export default CallAPIBtn;