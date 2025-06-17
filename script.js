function getFormvalue(event) {
  event.preventDefault(); // Prevents page refresh on form submit

  const fname = document.querySelector('input[name="fname"]').value.trim();
  const lname = document.querySelector('input[name="lname"]').value.trim();

  const fullName = `${fname} ${lname}`.trim(); // Handles edge cases

  alert(fullName);
}
