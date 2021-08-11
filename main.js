const sbmtbtn= document.getElementById('button')

let genders= document.querySelectorAll('.gender')

const studentName= document.getElementById('fullname')
const emailAddress= document.getElementById('email-address')
const taman= document.getElementById('age')
const studentGender= document.getElementById('ragaz')
const shar= document.getElementById('citys')
const talaba= document.getElementById('is-student')

function showInfo(e){
    e.preventDefault()

    const fName =document.getElementById('f-name').value
    const sName =document.getElementById('s-name').value 
    const email =document.getElementById('email').value 
    const age =document.getElementById('taman').value 
    const city =document.getElementById('city').value 
    const student=document.getElementById('student')

    let gender = ""
    for(let i=0; i < genders.length; i++){
        if(genders[i].checked){
            gender = genders[i].value 
        }
    }

    studentName.innerText = `${fName} ${sName}`
    taman.innerText = age
    emailAddress.innerText=email
	studentGender.innerText = gender
    if(student.checked){
        talaba.innerText='Yes'
    }
    else{
        talaba.innerText='No'
    }
    shar.innerText=city



}

sbmtbtn.addEventListener('click', showInfo)
