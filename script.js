function getFormvalue(event) {
  event.preventDefault(); 

  const fname = document.querySelector('input[name="fname"]').value.trim();
  const lname = document.querySelector('input[name="lname"]').value.trim();

  if (!fname && !lname) {
    alert("Please enter your full name.");
    return;
  }

  alert(`${fname} ${lname}`);
}
