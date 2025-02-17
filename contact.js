
let u = document.forms['validateform']['user'];
let s1 = document.getElementById('s1');
let e = document.forms['validateform']['email'];
let s2 = document.getElementById('s2');
let sub = document.forms['validateform']['sub'];
let s3 = document.getElementById('s3');
let com = document.forms['validateform']['com'];
let s4 = document.getElementById('s4');
function fun() {
  if (u.value === "" || e.value === "" || sub.value === "" || com.value === "") {
    if (u.value === "") {
        s1.textContent = "Please enter a Name";
        s1.style.display = "block";
    } else {
        s1.style.display = "none";
    }

    if (e.value === "") {
        s2.textContent = "Please enter an email address.";
        s2.style.display = "block";
    } else {
        s2.style.display = "none";
    }

    if (sub.value === "") {
        s3.textContent = "Enter a Subject name!";
        s3.style.display = "block";
    } else {
        s3.style.display = "none";
    }

    if (com.value === "") {
        s4.textContent = "Comment must be added!";
        s4.style.display = "block";
    } else {
        s4.style.display = "none";
    }
} else {
    s1.style.display = "none";
    s2.style.display = "none";
    s3.style.display = "none";
    s4.style.display = "none";
}

// if (u.value === "" || e.value === "" || sub.value === "" || com.value === ""){

//         s1.textContent = "Please enter a Name";
//         s1.style.display = "block";
//         s2.textContent = "Please enter an email address.";
//         s2.style.display = "block";
//         s3.textContent = "Enter a Subject name!";
//         s3.style.display = "block";
//         s4.textContent = "Comment must be added!";
//         s4.style.display = "block";
// }
// else
// {
//     s1.style.display = "none";
//     s2.style.display = "none";
//     s3.style.display = "none";
//     s4.style.display = "none";
// }

  if (u.value === "") {
    s1.textContent = "please enter a Name";
    s1.style.display = "block";
    return false; 
  } else {
    s1.style.display = "none";
  }

  let isValid = true;
for (let i = 0; i < u.value.length; i++) {
const char = u.value[i];
if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && !(char === " ")) {
isValid = false;
break;
}
}

if (!isValid) {
s1.textContent = "Only alphabetic characters are allowed.";
s1.style.display = "block";
return false;  
} else {
s1.style.display = "none";

}

  
  if (e.value === "") {
    s2.textContent = "Please enter an email address.";
    s2.style.display = "block";
    return false;
  } else {
    s2.style.display = "none";
  }

  if (sub.value === "") {
    s3.textContent = "Please enter a comment.";
    s3.style.display = "block";
    return false;
  } else {
    s3.style.display = "none";
  }
 
  if (com.value === "") {
    s4.textContent = "Please enter a comment.";
    s4.style.display = "block";
    return false;
  } else {
    s4.style.display = "none";
  }
 

 
  return true;
}


sub.addEventListener("input", () => {
  sub.style.border = "5px solid lightblue"; 
});


com.addEventListener("input", () => {
  com.style.border = "5px solid lightblue"; 
});
u.addEventListener("input", () => {
  u.style.border = "5px solid lightblue"; 
});
e.addEventListener("input", () => {
  e.style.border = "5px solid lightblue"; 
 
});


