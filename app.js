let count = 0
let value = document.querySelector("#value")
let btns = document.querySelectorAll(".btn")
// forEach basically takes each el w similar class and makes a list, then we can specify whar well do w each one
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
       const styles = e.currentTarget.classList 
       //returns the object of the eventlistener(btn) classList brings out each buttons specification
       if (styles.contains("decrease") ){
// contains specifies that we want the btn element which decreases as per its difference amongst other
        count-= 1
       } else if(styles.contains("increase")){ count += 1}
       else { count = 0}
       value.textContent = count 
       if(count < 0 ){
        value.style.color = "red" //style. changes the design
       } else if (count > 0){
        value.style.color = "green"
       } else {
        value.style.color = "black"
       }
    })
})