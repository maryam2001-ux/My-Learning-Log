const myForm = document.getElementById('formData');

myForm.addEventListener('submit' , function(e) {
    e.preventDefault()


    //* في حاله اني عايزه اجيب بيانات فعليا من الفورم 

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const Email = document.getElementById('email').value;
    const City = document.getElementById('city').value;


    //* في حاله اني هحط بقي البيانات جوا الجدول 
    
    const tableBody = document.getElementById("tableBody");

    const tr = document.createElement("tr");

    const numbertd = document.createElement("td");
    const firstNametd = document.createElement("td");
    const lastNametd = document.createElement("td");
    const Emailtd = document.createElement("td");
    const Citytd = document.createElement("td");
    
    numbertd.textContent = tableBody.children.length + 1;
    firstNametd.textContent = firstName;
    lastNametd.textContent = lastName;
    Emailtd.textContent = Email;
    Citytd.textContent = City;

    tr.appendChild(numbertd);
    tr.appendChild(firstNametd);
    tr.appendChild(lastNametd);
    tr.appendChild(Emailtd);
    tr.appendChild(Citytd);

    
    tableBody.appendChild(tr);

    formData.reset()



});
