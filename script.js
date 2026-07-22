/* --------------------------------
   CALCULATE FUNCTION
-------------------------------- */

function calculate() {


    // Get values from input boxes

    let cat1Input =
        document.getElementById("cat1");

    let cat2Input =
        document.getElementById("cat2");

    let cat3Input =
        document.getElementById("cat3");

    let assignmentInput =
        document.getElementById("assignment");


    // Convert input values to numbers

    let cat1 = Number(cat1Input.value);

    let cat2 = Number(cat2Input.value);

    let cat3 = Number(cat3Input.value);

    let assignment =
        Number(assignmentInput.value);


    // Get error and result elements

    let error =
        document.getElementById("error");

    let result =
        document.getElementById("result");

    let status =
        document.getElementById("status");


    /* --------------------------------
       VALIDATION
    -------------------------------- */


    // Check if any field is empty

    if (
        cat1Input.value === "" ||
        cat2Input.value === "" ||
        cat3Input.value === "" ||
        assignmentInput.value === ""
    ) {

        error.innerText =
            "⚠️ Please enter all marks.";

        result.innerText =
            "0 / 40";

        status.innerText = "";

        return;

    }


    // Check valid mark ranges

    if (
        cat1 < 0 ||
        cat1 > 50
    ) {

        error.innerText =
            "⚠️ CAT 1 must be between 0 and 50.";

        return;

    }


    if (
        cat2 < 0 ||
        cat2 > 25
    ) {

        error.innerText =
            "⚠️ CAT 2 must be between 0 and 25.";

        return;

    }


    if (
        cat3 < 0 ||
        cat3 > 50
    ) {

        error.innerText =
            "⚠️ CAT 3 must be between 0 and 50.";

        return;

    }


    if (
        assignment < 0 ||
        assignment > 50
    ) {

        error.innerText =
            "⚠️ Assignment must be between 0 and 50.";

        return;

    }


    // Clear previous error

    error.innerText = "";


    /* --------------------------------
       CALCULATION
    -------------------------------- */

    /*
       TEMPORARY FORMULA

       CAT 1       = 12 marks
       CAT 2       = 6 marks
       CAT 3       = 12 marks
       Assignment  = 10 marks

       Total = 40 marks

       Replace this formula with
       the actual RIT formula.
    */


    let total =

        (cat1 / 50) * 12 +

        (cat2 / 25) * 6 +

        (cat3 / 50) * 12 +

        (assignment / 50) * 10;


    /* --------------------------------
       DISPLAY RESULT
    -------------------------------- */


    result.innerText =
        total.toFixed(2) + " / 40";


    /* --------------------------------
       PASS OR FAIL
    -------------------------------- */


    if (total >= 23) {

        status.innerText =
            "✅ PASS";

        status.className =
            "pass";

    }

    else {

        status.innerText =
            "❌ FAIL";

        status.className =
            "fail";

    }

}


/* --------------------------------
   RESET FUNCTION
-------------------------------- */

function resetCalc() {


    // Clear all inputs

    document.getElementById("cat1").value = "";

    document.getElementById("cat2").value = "";

    document.getElementById("cat3").value = "";

    document.getElementById("assignment").value = "";


    // Reset result

    document.getElementById("result").innerText =
        "0 / 40";


    // Clear status

    document.getElementById("status").innerText = "";


    // Clear error

    document.getElementById("error").innerText = "";


    // Remove PASS/FAIL styling

    document.getElementById("status").className = "";

}
