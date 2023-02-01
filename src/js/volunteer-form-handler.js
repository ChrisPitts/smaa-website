function volunteerSubmitButtonClicked() {
    // Get value of all form inputs
    let name = $("#name").val();
    let pronouns = $("#pronouns").val();
    let email = $("#email").val();
    let number = $("#number").val();
    let availability = $("#availability").val();
    let misc = $("#misc").val();

    // AJAX request
    $.ajax({
        url: `https://docs.google.com/forms/d/e/1FAIpQLSfYpL_Cvx2v01I5ej40N8N_iS-_7B771nG717p6Huax5ssfbQ/formResponse`,
        data: {
            "entry.2115060488": name,
            "entry.1199531181": pronouns,
            "entry.1637927722": email,
            "entry.211068978": number,
            "entry.1146342519": availability,
            "entry.595271263": misc
        },
        type: "POST",
        success: (data) => {
            console.log("Success");
        },
        error: (xhr, status, error) => {
            console.log("Error");
        }
    });
}
