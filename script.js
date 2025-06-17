
 function getFormvalue(event) {
      event.preventDefault(); // Prevents page reload on form submit

      const form1 = event.target;
      const fname = form1.fname.value.trim();
      const lname = form1.lname.value.trim();

      const fullName = fname + " " + lname;

      alert(fullName);
    }