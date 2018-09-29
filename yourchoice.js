function CalculateAgeInQC(DOB, txtAge, Txndate) {
    if (DOB.value != '') {
        now = new Date(Txndate)
        var txtValue = document.getElementById(DOB).value;
        if (txtValue != null)
            dob = txtValue.split('/');
        if (dob.length === 3) {
            born = new Date(dob[2], dob[1] * 1 , dob[0]);
            age = now.getTime() - (born.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
            alert(" now.getTime  " + now.getTime());
            alert(" born.getTime  " + born.getTime());
            age = Math.floor((now.getTime() - born.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
            if (isNaN(age) || age < 0) {
                // alert('Input date is incorrect!');
            }
            else {
                document.getElementById(txtAge).value = age;
                document.getElementById(txtAge).focus();
            }
        }
    }
}

