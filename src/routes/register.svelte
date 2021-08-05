<script>
    import auth from "../firebase";

    const email = document.getElementById('emailr').value;
    const password = document.getElementById('passwordr').value;
    const login = async ()=>{
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("New User...")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
    }
</script>



<input type="text" placeholder="Email" id="emailr">
<input type="text" placeholder="Password" id="passwordr">
<button on:click={login}></button>