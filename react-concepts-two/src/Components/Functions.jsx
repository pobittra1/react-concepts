// differen ways to calling a function from jsx

export default function Functions() {

    // when no pass params. we can call it without () into {}.
    const alertHello = () => alert("Hello");

    //call this func wrapping in anonymous func
    const anonyWrapFunc = () => alert("anonymously wrapping func me");


    //passing a param into func and call it wrapping anonymously
    const addSomething = (value) => {
        alert(value + 10);
    }
    return (
        <>
            <button onClick={alertHello}>Click me to alert Hello</button>
            <button onClick={() => anonyWrapFunc()}>click here to alert again</button>
            <button onClick={() => addSomething(4)}>click to add 10</button>
        </>
    )
}
