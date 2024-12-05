function performOperation(operation) {
    const setA = new Set(
        document.getElementById("setA").value.split(",").map(item => item.trim())
    );
    const setB = new Set(
        document.getElementById("setB").value.split(",").map(item => item.trim())
    );
    let result;

    switch (operation) {
        case "intersection":
            result = [...setA].filter(item => setB.has(item));
            displayResult(`Intersection: { ${result.join(", ")} }`);
            break;

        case "difference":
            result = [...setA].filter(item => !setB.has(item));
            displayResult(`Difference (A - B): { ${result.join(", ")} }`);
            break;

        case "inclusion":
            result = [...setA].every(item => setB.has(item));
            displayResult(`Is A ⊆ B? ${result ? "True" : "False"}`);
            break;

        case "membership":
            const element = prompt("Enter an element to check membership in A:");
            result = setA.has(element);
            displayResult(`Is "${element}" ∈ A? ${result ? "True" : "False"}`);
            break;

        default:
            displayResult("Invalid Operation");
    }
}

function displayResult(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = message;
}
