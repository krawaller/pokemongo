firebase.initializeApp({
  apiKey: "AIzaSyAHI5hmxOqbfUcYhyZNppIiYBB_tN1k8Jk",
  authDomain: "pokemon-207f6.firebaseapp.com",
  databaseURL: "https://pokemon-207f6.firebaseio.com",
  messagingSenderId: "106152870351"
});

firebase.database().ref('/').on('value',function(snapshot){
  var counts = snapshot.val();
  $("#valor > div").text(counts.valor)
  $("#mystic > div").text(counts.mystic)
  $("#instinct > div").text(counts.instinct)
})

$("#main").on("click",".option",function(){
  firebase.database().ref(this.id).transaction(function(c){
    return c+1
  })
})
