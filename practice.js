
//ADD YOUR FIREBASE LINKS



  function add_name() {
      user_name=document.getElementById("user_name").value;

      firebase.database().ref("/").child(user_name).update({ purpose: "add user"});
  }