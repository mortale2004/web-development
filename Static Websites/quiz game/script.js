let startQuiz = document.getElementById("start");
let questions = document.getElementById("question");
let options = document.getElementsByTagName("label")
let optionRadio = document.getElementsByClassName("optionRad");
const next = document.getElementById("next");
const sectionVis = document.getElementsByClassName("sectionVis")[0];
let correct = 0, count = 0;
let quiz, nQuestion;
optionRadio = Array.from(optionRadio);
options = Array.from(options);


do{
    quiz = prompt("Enter which quiz do you want to play:\n 1. C \n 2. HTML \n 3. CSS \n 4. JavaScript");
    nQuestion = prompt("How many question do you wnat?:\n 1.10 \n 2. 20\n 3.30\n 4.40");
    nQuestion = Number.parseInt(nQuestion);
    
    console.log(nQuestion);
    
    if (quiz=="c" || quiz == "C" || quiz == "1") // contains the array for c language questions
    {
        var array = [
            ["Who is the developer of C Language", "Dennis Rithie", "Charles Babbage", "Ken Thomspon", "Tim Berneres Lee", 0,],
        ["All keywords in C are in _________", "LowerCase letters", "UpperCase letters", "CamelCase letters", "None of the mentioned", 0,],
        ["Which is valid C expression?", "int my_num = 100,000;", "int my_num = 100000;", "int my num = 1000;", "int $my_num = 10000;", 1,],
        ["What is #include <stdio.h>?", "Preprocessor directive", "Inclusion directive", "File inclusion directive", "None of the mentioned", 0,],
        ["Who is the father of C language?", "Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf",2],
        ["Which of the following is not a valid C variable name?", "int number;", "float rate;", "int variable_count;", "int $main;",3],
        ["All keywords in C are in ____________", "LowerCase letters", "UpperCase letters", "CamelCase letters", "None of the mentioned",0],
        ["Which of the following is true for variable names in C?", "They can contain alphanumeric characters as well as special characters", "It is not an error to declare a variable to be one of the keywords(like goto, static)", "Variable names cannot start with a digit", "Variable can be of any length",2],
        ["Which is valid C expression?", "int my_num = 100,000;", "int my_num = 100000;", "int my num = 1000;", "int $my_num = 10000;",1],
        ["Which of the following cannot be a variable name in C?", "volatile", "true", "friend", "export",0],
        ["What is short int in C programming?", "The basic data type of C", "Qualifier", "Short is the qualifier and int is the basic data type", "All of the mentioned",2],
        ["Which of the following declaration is not supported by C language?", "String str;", "char *str;", "float str = 3e2;", "Both “String str;” and “float str = 3e2;”",0],
        ["Which keyword is used to prevent any changes in the variable within a C program?", "immutable", "mutable", "const", "volatile",2],
        ["What is the result of logical or relational expression in C?", "True or False", "0 or 1", "0 if an expression is false and any positive number if an expression is true", "None of the mentioned",1],
        ["Which of the following typecasting is accepted by C language?", "Widening conversions", "Narrowing conversions", "Widening & Narrowing conversions", "None of the mentioned",2],
        ["Where in C the order of precedence of operators do not exist?", "Within conditional statements, if, else", "Within while, do-while", "Within a macro definition", "None of the mentioned",3],
        ["Which of the following is NOT possible with any 2 operators in C?", "Different precedence, same associativity", "Different precedence, different associativity", "Same precedence, different associativity", "All of the mentioned",2],
        ["What is an example of iteration in C?", "for", "while", "do-while", "all of the mentioned",3],
        ["Functions can return enumeration constants in C?", "true", "false", "depends on the compiler", "depends on the standard", 0],
        ["Functions in C Language are always _________", "Internal", "External", "Both Internal and External", "External and Internal are not valid terms for functions", 1],
        ["Which of following is not accepted in C?", "static a = 10; //static as", "static int func (int); //parameter as static", "static static int a; //a static variable prefixed with static", "all of the mentioned", 2],
        ["Property which allows to produce different executable for different platforms in C is called?", "File inclusion", "Selective inclusion", "Conditional compilation", "Recursive macros", 2],
        ["What is #include <stdio.h>?", "Preprocessor directive", "Inclusion directive", "File inclusion directive", "None of the mentioned", 0],
        ["C preprocessors can have compiler specific features.", "True", "False", "Depends on the standard", "Depends on the platform", 0],
        ["Which of the following are C preprocessors?", "#ifdef", "#define", "#endif", "all of the mentioned", 3],
        ["The C-preprocessors are specified with _________ symbol.", "#", "$", "” ”", "&", 0],
        ["How is search done in #include and #include “somelibrary.h” according to C standard?", "When former is used, current directory is searched and when latter is used, standard directory is searched", "When former is used, standard directory is searched and when latter is used, current directory is searched", "When former is used, search is done in implementation defined manner and when latter is used, current directory is searched", "For both, search for ‘somelibrary’ is done in implementation-defined places", 1],
        ["How many number of pointer (*) does C have against a pointer variable declaration?", "7", "127", "255", "No limits", 3],
        ["Which of the following is not possible statically in C language?", "Jagged Array", "Rectangular Array", "Cuboidal Array", "Multidimensional Array", 0],
        ["Which of the following return-type cannot be used for a function in C?", "char *", "struct", "void", "none of the mentioned", 3],
        ["The standard header _______ is used for variable list arguments (…) in C.", "&lt; stdio.h &gt;", "&lt;stdlib.h&gt;", "&lt;math.h&gt;", "&lt;stdarg.h&gt;", 3],
        ["When a C program is started, O.S environment is responsible for opening file and providing pointer for that file?", "Standard input", "Standard output", "Standard error", "All of the mentioned", 3] ,
        ["In C language, FILE is of which data type?", "int", "char *", "struct", "None of the mentioned", 2],
        ["What is the sizeof(char) in a 32-bit C compiler?", "1 bit", "2 bits", "1 Byte", "2 Bytes", 2],
        ["Which of the following is not an operator in C?", ",", "sizeof()", "~", "None of the mentioned", 3],
        ["scanf() is a predefined function in______header file.", "stdlib. h", "ctype. h", "stdio. h", "stdarg. h", 2],
        ["What is the range of values that can be stored by int datatype in C?", "-(2^31) to (2^31) - 1", "-256 to 255", "-(2^63) to (2^63) - 1", "0 to (2^31) -1", 0],
        ["How is an array initialized in C language?", "int a[3] = {1,2,3};", "int a = {1,2,3};", "int a[] = new int[3]", "int a(3) = [1,2,3];", 0],
    ]

}
else if (quiz == "HTML" || quiz == "2" || quiz =="html" || quiz == "Html") // containes the array for html questions
{
    var array = [
        ['Which of the following is not an HTML tag?', '&lt; select &gt;', '&lt; input &gt;', '&lt; textarea &gt;', '&lt; list &gt;',  3],
        ['Which among these is not a Web browser?', 'www', 'Chrome', 'Opera', 'NetSurf', 3],
        ['World Wide Web was invented by', 'obert E. Kahn', 'Ted Nelson', 'Tim Berners-Lee', 'Linus Torvalds', 2],
        ['What does HTML stand for?', 'Hyper Text Markup Language', 'High Text Markup Language', 'Hyper Tabular Markup Language', 'None of these', 0],
        ['HTTPs stands for', 'Hyper Text Transfer Protocol Secure', 'High Text Transfer Protocol Secure', 'Hyper Transfer Protocol Standard', 'Hyper Transfer Protocol Secure', 0],
        ['Which of the following element is responsible for making the text italic in HTML?', '&lt;i&gt;', '&lt;italic&gt;', '&lt;it&gt;', '&lt;pre&gt;', 0],
        ['How to insert an image in HTML?', '&lt;img href = "jtp.png" /&gt;', '&lt;img url = "jtp.png" /&gt;', '&lt;img link = "jtp.png" /&gt;', '&lt;img src = "jtp.png" /&gt;', 3],
        ['How to add a background color in HTML?', '&lt;marquee bg color: "red"&gt;', '&lt;marquee bg-color = "red"&gt;', '&lt;marquee bgcolor = "red"&gt;', '&lt;marquee color = "red"&gt;', 2], 
        ['&lt;input&gt; is -', 'a format tag.', 'an empty tag.', 'All of the above', 'None of the above', 1],
        ['Which of the following tag is used to make the underlined text?', '&lt;i&gt;', '&lt;ul&gt;', '&lt;u&gt;', '&lt;pre&gt;', 3],
        ['How to create a checkbox in HTML?', '&lt;input type = "checkbox"&gt;', '&lt;input type = "button"&gt;', '&lt;checkbox&gt;', '&lt;input type = "check"&gt;', 0],
        ['Which of the following tag is used to define options in a drop-down selection list?', '&lt;select&gt;', '&lt;list&gt;', '&lt;dropdown&gt;', '&lt;option&gt;', 3],
        ['HTML tags are enclosed in-', '# and #', '{ and }', '! and ?', '&lt; and /&gt;' ,3],
        ['Which of the following tag is used to add rows in the table?', '&lt;td&gt; and &lt;/td&gt;', '&lt;th&gt; and &lt;/th&gt;', '&lt;tr&gt; and &lt;/tr&gt;', 'None of the above', 2],
        ['The &lt;hr&gt; tag in HTML is used for -', 'new line', 'vertical ruler', 'new paragraph', 'horizontal ruler', 3],
        ['Which of the following attribute is used to provide a unique name to an element?', 'class', 'id', 'type', 'None of the above', 1],
        ['Which of the following HTML tag is used to display the text with scrolling effect?', '&lt;marquee&gt;', '&lt;scroll&gt;', '&lt;div&gt;', 'None of the above', 0],
        ['Which of the following HTML tag is the special formatting tag?', '&lt;p&gt;', '&lt;b&gt;', '&lt;pre&gt;', 'None of the above', 2],
        ['Which of the following is the correct way to send mail in HTML?', '&lt;a href = "mailto: xy@y\'&gt;', '&lt;a href = "xy@y&gt;', '&lt;mail xy@y&lt;/mail&gt;', 'None of the above', 0],
        ['Which of the following is the container for &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt; ?', '&lt;data&gt;', '&lt;table&gt;', '&lt;group&gt;', 'All of the above', 1],
        ['How to insert a background image in HTML?', '&lt;body background = "img.png"&gt;', '&lt;img background = "img.png"&gt;', '&lt;bg-image = "img.png"&gt;', 'None of the above', 0],
        ['What are the types of unordered or bulleted list in HTML?', 'disc, square, triangle', 'polygon, triangle, circle', 'disc, circle, square', 'All of the above', 2],
        ['Which of the following is the correct way to create a list using the lowercase letters?', '&lt;ol alpha = "a" &gt;', '&lt;ol type = "a"&gt;', '&lt;ol letter = "a"&gt;', 'None of the above', 1],
        ['Which of the following is the correct way to start an ordered list with the count of numeric value 4?', '&lt;ol type = "1" initial = "4"&gt;', '&lt;ol type = "1" begin = "4"&gt;', '&lt;ol type = "1" num = "4"&gt;', '&lt;ol type = "1" start = "4"&gt;', 3],
        ['Which of the following HTML attribute is used to define inline styles?', 'style', 'type', 'class', 'none of above', 0],
        ['Which of the following is the paragraph tag in HTML?', '&lt;p&gt;', '&lt;b&gt;', '&lt;pre&gt;', 'None of the above', 0],
        ['An HTML program is saved by using the ____ extension.', '.ht', '.html', '.hml', 'None of the above', 1],
        ['A program in HTML can be rendered and read by -', 'Web browser', 'Server', 'Interpreter', 'None of the above', 0],
        ['The tags in HTML are -', 'case-sensitive', 'in upper case', 'not case sensitive', 'in lowercase', 2],
        ['Which of the following is the root tag of the HTML document?', '&lt;body&gt;', '&lt;head&gt;', '&lt;title&gt;', '&lt;html&gt;', 3],
        ['In HTML5, which of the following tag is used to initialize the document type?', '&lt;Doctype HTML&gt;', '&lt;\Doctype html&gt;', '&lt;Doctype&gt;', '&lt;!DOCTYPE html&gt;', 3],
        ['Which of the following tag is used to create a combo box (or drop-down box)?', '&lt;list&gt;', '&lt;select&gt;','&lt;input type = "dropdown"&gt;', '&lt;ul&gt;', 2],
        ['Which of the following are the attributes of the tag?', 'method', 'action','Both (a) & (b)', 'None of the above', 2],
        ['Which is the correct way to comment out something in HTML?', 'Using ## and #', 'Using &lt;!-- and --&gt;','Using &lt;/-- and -/-&gt;', 'Using &lt;!-- and -!&gt;', 1],
        ['Which HTML tag is used to display the power in expression, i.e., (x2 - y2)?', '&lt;sup&gt;', '&lt;sub&gt;','&lt;p&gt;', 'None of the above', 0],
        ['Which of the following is the correct way to change the font face in HTML?', '&lt;font name = "Calibri"&gt; ……… &lt;/font&gt;', '&lt;font face = "Calibri"&gt; ……… &lt;/font&gt;', '&lt;font = "Calibri"&gt; ……… &lt;/font&gt;', 'None of the above', 1],        
        ]
    
    
    
    
}
else if (quiz == "CSS" || quiz == "3" || quiz == "Css" || quiz == "css") // contains the array for css questions
{
    var array = [
       
    ]
    
}
else if (quiz == "JAVASCRIPT" || quiz == "4" || quiz == "javascript" || quiz == "Javascript" || quiz == "JavaScript") // contains the array for javascriipt questions
{

}
else 
{
    alert("Please Enter correct choice");
    quiz = "not entered"
}


}while(quiz == "not entered" || nQuestion == NaN)


// **************************************************************
// Functions of the quiz

// Function for retrieving questions
const displayQues = (count) => {
    // adds questions in h1 tag
    questions.innerHTML =`Q.${count+1} ${array[count][0]}`;
    
    // adds options in the label 

    options.forEach((e, i) => {
        options[i].innerHTML = array[count][i + 1];
    })
    
}


// Function for checking questions
const checkCorrectAns = (count) => {

    // Checks which radio button is checked
    optionRadio.forEach((e, i) => {
        if (optionRadio[i].checked) {

            if (i === array[count][5]) {
                correct++;
            }
        }

        // unchecks the checked radio buttons
        optionRadio[i].checked = false;
    })

}



// *********************Event Listeners **********************************

    startQuiz.addEventListener("click", () => {
        if (quiz != null || quiz == "")
        {
        sectionVis.style.display = "none";

        displayQues(count);
        count++;
        }
    })


// activates when clicked on the next button
next.addEventListener("click", () => {

    // displays and count the correct answares till counter is less than no of questions choosed by the user
    if (count < nQuestion) {
        displayQues(count);
        checkCorrectAns(count - 1);
    }
    // when count is equal to no of questions displayed then shows the result 
    else if (count === nQuestion) {
        checkCorrectAns(count - 1);
        sectionVis.style.display = "flex";
        sectionVis.innerHTML = `<h1> Your score is ${correct} out of ${nQuestion}.`   // displays score at the ending of the questions 
    }
    count++; // increment the counter of questions by 1.
});