var student = [];

function sub() {
    for (let i = 1; i < 6; i++) {
        var name1 = document.getElementById("nm" + i).value;
        console.log(name1)
        student.push(name1);

    }

    var length = student.length
    for (let j = 0; j < length; j++) {
        student.push("<h4> name: " + student[j] + "</h4> <br>");
        console.log(student)


    }
    console.log(student);
    var remove = student.join(" ")

    console.log(student);
    document.getElementById("disn").innerHTML = student;
    document.getElementById("sub").style.display = "none";
    document.getElementById("disn").innerHTML = remove;
    document.getElementById("srt").style.display = "inline-block";
}

function srt() {
    student.sort();
    console.log(student)
    document.getElementById("disn").innerHTML = student;

    for (let j = 0; j < length; j++) {
        student.push("<h4> name: " + student[j] + "</h4> <br>");
        console.log(student)


    }
    var remove = student.join(" ")
    document.getElementById("disn").innerHTML = remove;

}