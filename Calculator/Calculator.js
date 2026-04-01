let calculation=JSON.parse(localStorage.getItem('calculation'))|| ' ';
       displayCal();
      function updateCalculation(value)
      {
     
        calculation+=value;
       displayCal();
      }
      function displayCal()
      {
        document.querySelector('.Display-cal').innerHTML= calculation;
      }