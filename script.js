let lat;
let long;
let  city;
 let region;
 let organisation;
 let hostname;
let timezone;
let datetime;
let pincode ;
let message;

//let API_KEY = "1c18bdc3e52a15f56b3af6951038e572";

$.getJSON("https://api.ipify.org?format=json", function(data) {
         
// Setting text of element P with id gfg
$("#gfg").html(data.ip);
})

document.getElementById("fetch_data").addEventListener("click", () => {
  // get the lat and long
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log("lat", lat, "long", long);

        // fetch
        https://maps.goog
       //document.body.innerHTML += `<br/><br/><iframe src="le.com/maps?q=${lat}, ${long}&z=15&output=embed" width="500" height="250" frameborder="0" style="border:0"></iframe>`;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            document.body.innerHTML += `
            <br/><br/>
           <p>Time Zone: ${data.timezone}</p>
            <p>Date and Time: ${data.datetime}</p>
            <p>Pincode: ${data.pincode}</p>
            <p>Message: ${data.message}</p>
            
            `;
          });
      },
      (error) => {
        alert(error);
      }
    );
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  
  $.getJSON('https://ipapi.co/json/', function(data){
  //$("#ip").text(data.ip);
  $('#lat').text(data.latitude);
  $('#long').text(data.longitude);
 $('#city').text(data.city);
  $('#region').text(data.region);
   $('#organisation').text(data.org);
   $('#hostname').text(data.country_capital);
  //$("#gmaps").attr("src", "https://www.google.com/maps?q="+data.latitude+","+data.longitude+"&output=embed");
})
});

$.getJSON('https://ipapi.co/json/', function(data){
  //$("#ip").text(data.ip);
  $('#timezone').text(data.timezone);
  $('#pincode').text(data.postal);
 ;
})

$('button').click(function(){
  $('#result_data').html('')
  var pincode=$('#pincode').val();
  $.getJSON('https://api.postalpincode.in/pincode/400070'

  +pincode,function(data){
      console.log(data)

      $('#res_msg').html(data[0].Message)
      data[0].PostOffice.forEach(po=>
          $('#result_data').append('<li>Name:'+po.Name+'Branch type:'+po.BranchType+'Branch type:'+po.BranchType+'Delivery status:'+po.DeliveryStatus+'District:'+po.District+'Division:'+po.Division+'</li>'))
      })
  })







const searchFun =() =>{
  let filter = document.getElementById('search').value.toUpperCase();
  let table= document.getElementById('tb');
  let  tr=table.getElementsByTagName('tr');
  for(var i=0;i<tr.length;i++){
      let td=tr[i].getElementsByTagName('td')[0];
      if(td){
          let textValue=td.textContent  ;
      if(textValue.toUpperCase().indexOf(filter)>-1){
          tr[1].style.display="";
      }
      else{
          tr[i].style.display="none";
      }
      }
  }
}

//timezone

/*fetch('https://api.example.com/date-time-endpoint')
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    const dateTime = data.datetime;
    console.log(dateTime);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error:', error);
  });


//pincode

fetch(
  `https://api.postalpincode.in/pincode/${pincode} `
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.body.innerHTML += `
    <p>Pincode: ${data.Pincode}</p>
            <p>Message: ${data.Message}</p>
            
            `;
          });
          $.getJSON("https://api.ipify.org?format=json", function(data) {
         
          // Setting text of element P with id gfg
          $("#gfg").html(data.ip);
      })
      */